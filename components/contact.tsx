"use client"

import Link from "next/link"
import { useGsapFadeIn } from "./useGsapFadeIn"

export default function Contact(){
    useGsapFadeIn("#my-title7")
    return(
        <section id="kontakt" className="flex flex-col text-2xl md:flex-row w-full text-card">
            <div className="w-full md:w-1/2 bg-foreground justify-start flex flex-col p-4 md:p-8 2xl:p-12 text-xl">
                <h1 id="my-title7" className="font-averia text-6xl sm:text-7xl mb-4">Kontakt</h1>
                <h2 className="text-3xl font-bold">Adresa</h2>
                <span>Bezručova 143,</span>
                <span>Havlířkův Brod, 580 01</span>
                <span>Česká republika</span>
                <h2 className="text-3xl font-bold">Telefon</h2>
                <Link href={"tel:+420720522585"}>+420 720 522 585</Link>
            <h2 className="text-2xl font-bold">E-maily</h2>
            <Link href={"mailto:rezervace.jantar@centrum.cz"}>rezervace.jantar@centrum.cz</Link>
           
            <p><span className="text-2xl font-bold">IČO</span>:&nbsp;46482890</p>
            <p><span className="text-2xl font-bold">Fakturace</span>:&nbsp; <Link href={"mailto:josef.mysicka@centrum.cz"}>josef.mysicka@centrum.cz</Link></p>
            </div>
           <iframe className="w-full md:w-1/2 min-h-96" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2585.794291967203!2d15.577880776858812!3d49.60162854811595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470d00c03b4966b5%3A0x2656317be5e787e3!2sPenzion%20Jantar!5e0!3m2!1scs!2scz!4v1755324940072!5m2!1scs!2scz"   loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </section>
    )
}