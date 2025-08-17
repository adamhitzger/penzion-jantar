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
        pokoj: formData.get("pokoj") as string,
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
          to: "adam.hitzger@icloud.com",
          subject: "Nový kontakt",
          text: `Celé jméno: ${data.name}, Email: ${data.email}, Tel. číslo: ${data.tel}, Datum příjezdu: ${data.from}, Datum odjezdu: ${data.to}, Počet pokojů: ${data.pocetPokoju} , Typ pokoje: ${data.pokoj}, Počet hostů: ${data.pocetHostu}, Rozložení lůžek: ${data.rozlozeniLuzek} Zpráva: ${data.msg}`,
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