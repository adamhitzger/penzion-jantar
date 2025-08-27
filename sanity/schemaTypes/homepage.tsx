import { defineArrayMember, defineField, defineType } from "sanity";

export const homepageSchema = defineType({
    name: "homepage",
    title: "Hlavní stránka",
    type: "document",
    fields: [
        defineField({
            type: "text",
            name: "ubytHeading",
            title: "Nadpis sekce - Ubytování"
        }),
        defineField({
            type: "array",
            name: "ubytText",
            title: "Text sekce - Ubytování",
            of:[
                {type: "block"}
            ]
        }),
        defineField({
            type: "text",
            name: "aboutHeading",
            title: "Nadpis sekce - O penzionu"
        }),
        defineField({
            type: "array",
            name: "aboutText",
            title: "Text sekce - O penzionu",
            of:[
                {type: "block"}
            ]
        }),
        defineField({
            type: "text",
            name: "okoliHeading",
            title: "Nadpis sekce - Okolí"
        }),
        defineField({
            type: "array",
            name: "okoliText",
            title: "Text sekce - Okolí",
            of:[
                {type: "block"}
            ]
        }),
        defineField({
            type: "text",
            name: "reviewHeading",
            title: "Nadpis sekce - Recenze"
        }),
        defineField({
            type: "array",
            name: "reviewText",
            title: "Text sekce - Recenze",
            of:[
                {type: "block"}
            ]
        }),
        
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