import { defineArrayMember, defineField, defineType } from "sanity";

export const homepageSchema = defineType({
    name: "homepage",
    title: "Hlavní stránka",
    type: "document",
    fields: [
        defineField({
            name: "headerImages",
            title: "Obrázky v hlavní sekci",
            type: "array",
            of: [
                {
                    type: "image"
                }
            ]
        }),
        defineField({
            name: "rooms",
            title: "Pokoje",
            type: "array",
            of: [
                {type: "pokoj"}
            ]
        }),
        defineField({
            name: "aboutImages",
            title: "Obrázky v sekci O nás",
            type: "array",
            of: [
                {
                    type: "image"
                }
            ]
        }),
        defineField({
            name: "lokalita",
            title: "Okolí",
            type: "array",
            of: [
                {type: "lokalita"}
            ]
        }),
        defineField({
            name: "galleryImages",
            title: "Obrázky fotogalerie",
            type: "array",
            of: [
                {
                    type: "image"
                }
            ]
        }),
        defineField({
            name: "reviews",
            title: "Hodnocení",
            type: "array",
            of: [
                {type: "reviews"}
            ]
        }),
         defineField({
            name: "ubytovaciRad",
            title: "Ubytovací řád",
            type: "array",
            of: [
                {type: "block"}
            ]
        }),
    ]
})