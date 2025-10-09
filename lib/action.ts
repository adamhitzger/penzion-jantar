"use server"

import { ContactType } from "./schema";
import { ActionResponse } from "@/types";
import { contactSchema } from "./schema";
import { revalidatePath } from "next/cache";
import nodemailer from "nodemailer"

function smtp(){
  return nodemailer.createTransport({
       service: "gmail",
        auth: {
         user: process.env.FROM_EMAIL!,
         pass: process.env.FROM_EMAIL_PASSWORD!,
        },
      });
}

export async function sendContact(
    prevState: ActionResponse<ContactType>,
    formData: FormData
  ): Promise<ActionResponse<ContactType>> {
    let revalidate = false;
    const transporter = smtp();
    try {
      const contact: ContactType = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        tel: formData.get("tel") as string,
        from: formData.get("from") as string,
        to: formData.get("to") as string,
        pokoj: formData.getAll("pokoj") as string[],
        pocetHostu: Number(formData.get("pocetHostu")),
        pocetPokoju: Number(formData.get("pocetPokoju")),
        rozlozeniLuzek: formData.get("rozlozeniLuzek") as string,
        msg: formData.get("msg") as string,
      };
  
      const validatedData = contactSchema.safeParse(contact);
      console.log("validated data", validatedData)
      if (!validatedData.success) {
        return {
          success: false,
          submitted:true,
          message: "Některá pole jste nevyplnili dobře",
          errors: validatedData.error.flatten().fieldErrors,
          inputs: contact,
        };
      } else {
        const data = validatedData.data;
        const sendMail = await transporter.sendMail({
          from: process.env.FROM_EMAIL,
          to: "rezervace.jantar@centrum.cz",
          subject: "Nový kontakt",
          html: `
<div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,'Helvetica Neue',Arial; color:#111; line-height:1.4; max-width:700px; margin:0 auto; padding:20px;">
  <header style="text-align:center; padding-bottom:12px; border-bottom:1px solid #eee;">
    <h1 style="margin:0; font-size:20px;">Nová rezervace / kontaktní zpráva</h1>
    <p style="margin:6px 0 0; color:#666;">Přehled údajů zaslaných formulářem</p>
  </header>

  <main style="padding:18px 0;">
    <table role="presentation" style="width:100%; border-collapse:collapse; margin-bottom:14px;">
      <tbody>
        <tr>
          <td style="padding:8px 0; width:40%; color:#444; font-weight:600;">Celé jméno</td>
          <td style="padding:8px 0;">${data.name}</td>
        </tr>
        <tr>
          <td style="padding:8px 0; color:#444; font-weight:600;">Email</td>
          <td style="padding:8px 0;">
            <a href="mailto:${data.email}" style="color:#1a73e8; text-decoration:none;">${data.email}</a>
          </td>
        </tr>
        <tr>
          <td style="padding:8px 0; color:#444; font-weight:600;">Tel. číslo</td>
          <td style="padding:8px 0;">
            <a href="tel:${data.tel}" style="color:#1a73e8; text-decoration:none;">${data.tel}</a>
          </td>
        </tr>
        <tr>
          <td style="padding:8px 0; color:#444; font-weight:600;">Datum příjezdu</td>
          <td style="padding:8px 0;">${data.from}</td>
        </tr>
        <tr>
          <td style="padding:8px 0; color:#444; font-weight:600;">Datum odjezdu</td>
          <td style="padding:8px 0;">${data.to}</td>
        </tr>
        <tr>
          <td style="padding:8px 0; color:#444; font-weight:600;">Počet pokojů</td>
          <td style="padding:8px 0;">${data.pocetPokoju}</td>
        </tr>
        <tr>
          <td style="padding:8px 0; color:#444; font-weight:600;">Typ pokoje</td>
          <td style="padding:8px 0;">${data.pokoj}</td>
        </tr>
        <tr>
          <td style="padding:8px 0; color:#444; font-weight:600;">Počet hostů</td>
          <td style="padding:8px 0;">${data.pocetHostu}</td>
        </tr>
        <tr>
          <td style="padding:8px 0; color:#444; font-weight:600;">Rozložení lůžek</td>
          <td style="padding:8px 0;">${data.rozlozeniLuzek}</td>
`
        });
        if (!sendMail.accepted) {
          revalidate = false;
          return {
            submitted:true,
            success: false,
            message: "Nepodařilo se odeslat e-mail. Kontaktujte nás na e-mailu.",
            inputs: contact,
        };
        } else {
             
          revalidate = true;
          return {
            submitted:true,
            success: true,
            message: "Děkujeme za záslání! Co nevidět se Vám ozveme.",
          };
        }
      }
    } catch (error) {
      console.error(error);
      return {
        submitted:true,
        success: false,
        message: "Nepovedlo se odeslat Vaše údaje",
      };
    } finally {
      if (revalidate) {
        revalidatePath("/");
      }
    }
  }