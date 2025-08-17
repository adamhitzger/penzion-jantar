"use client"

import Image from "next/image"
import { useGsapFadeIn } from "./useGsapFadeIn"
export default function About({images}: {images: string[]}){
     useGsapFadeIn("#my-title2")
   
    return(
         <section id="openzionu" className="flex flex-col w-full space-y-5  p-4 md:p-8 2xl:p-12">
             <h1 id="my-title2" className="font-averia text-6xl sm:text-7xl text-black text-right">O penzionu Jantar</h1>
            <div className="flex gap-5 flex-col-reverse md:flex-row w-full md:items-center">
                <Image src={images[0]} alt="Penzion Jantar" width={400} height={300} className="rounded-[10px] shadow-lg mx-auto"/>
                <p className="text-lg text-center">
                    Soukromý penzion Jantar je situován téměř v centru města Havlíčkův Brod na Vysočině. Penzion provozujeme od roku 2009 a nedávno prošel celkovou rekonstrukci, čímž můžeme nabízet kvalitní ubytování s dobrými službami a profesionálním personálem. Pokoje jsou nekuřácké a jsou vybaveny moderním nábytkem. Pro kuřáky máme zřízenou kuřárnu s terasou. Před penzionem je k posezení možno využít pergoly. Parkoviště s kamerovým systémem přímo u budovy zdarma. Pokud cestujete vlakem nebo autobusem nebudete to k nám mít daleko
                </p>
            </div>
            <div className="flex gap-5 flex-col-reverse md:flex-row w-full flex-wrap">
                <Image src={images[1]} alt="Penzion Jantar" width={200} height={300} className="rounded-[10px] shadow-lg mx-auto"/>
                <Image src={images[2]} alt="Penzion Jantar" width={200} height={100} className="rounded-[10px] shadow-lg m-auto w-96 h-56"/>
                <Image src={images[3]} alt="Penzion Jantar" width={400} height={300} className="rounded-[10px] shadow-lg m-auto"/>
               
            </div>
        </section>
    )
}