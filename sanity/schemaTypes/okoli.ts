import { defineField, defineType } from "sanity";

export const lokalita = defineType({
    type: "object",
    title: "Lokalita",
    name: "lokalita",
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
            type: "string",
            title: "Popis",
            name: "text",
        }),
         defineField({
            type: "string",
            title: "Odkaz",
            name: "link",
        }),
    ]
})