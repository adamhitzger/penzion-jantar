import * as z from "zod"

const phoneRegex = new RegExp(/^\+?\d{1,4}[\s-]?(\d[\s-]?){6,14}\d$/)

export const contactSchema = z.object({
    name: z.string().min(3, {message: "Jméno je moc krátké"}),
    email: z.email("Neplatný formát e-mailu"),
    tel: z.string().min(1).regex(phoneRegex, {message: "Zadali jste číslo ve špatném formátu"}),
    from: z.string().min(1, {message: "Pole je povinné"}),
    to: z.string().min(1, {message: "Pole je povinné"}),
    pokoj: z.string().min(1, {message: "Pole je povinné"}),
    pocetPokoju: z.number().min(1, {message: "Pole je povinné"}),
    pocetHostu: z.number().min(1, {message: "Pole je povinné"}),
    rozlozeniLuzek: z.string().min(1, {message: "Pole je povinné"}),
    msg: z.string().optional()
})

export type ContactType = z.infer<typeof contactSchema>