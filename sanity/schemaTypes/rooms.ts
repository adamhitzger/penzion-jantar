import { defineField, defineType } from "sanity";

export const pokoj = defineType({
    type: "object",
    title: "Pokoj",
    name: "pokoj",
    fields: [
        defineField({
            type: "string",
            title: "Název",
            name: "name",
        }),
        defineField({
            type: "image",
            title: "Obázek",
            name: "img",
        }),
        defineField({
            type: "array",
            title: "Obázek",
            name: "imgs",
            of:[{type: "image"}]
        }),
         defineField({
            type: "number",
            title: "Cena",
            name: "price",
        }),
    ]
})