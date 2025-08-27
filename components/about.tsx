"use client"

import Image from "next/image"
import { useGsapFadeIn } from "./useGsapFadeIn"
import { PortableText } from "next-sanity"
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function About({images,heading,text}: {images: string[],heading:string,text:any}){
     useGsapFadeIn("#my-title2")
   
    return(
         <section id="openzionu" className="flex flex-col w-full space-y-5  p-4 md:p-8 2xl:p-12">
             <h1 id="my-title2" className="font-averia text-6xl sm:text-7xl text-black text-right">{heading}</h1>
            <div className="flex gap-5 flex-col-reverse md:flex-row w-full md:items-center">
                <Image src={images[0]} alt="Penzion Jantar" width={400} height={300} className="rounded-[10px] shadow-lg mx-auto"/>
                <PortableText value={text}/>
            </div>
            <div className="flex gap-5 flex-col-reverse md:flex-row w-full flex-wrap">
                <Image src={images[1]} alt="Penzion Jantar" width={200} height={300} className="rounded-[10px] shadow-lg mx-auto"/>
                <Image src={images[2]} alt="Penzion Jantar" width={200} height={100} className="rounded-[10px] shadow-lg m-auto w-96 h-56"/>
                <Image src={images[3]} alt="Penzion Jantar" width={400} height={300} className="rounded-[10px] shadow-lg m-auto"/>
               
            </div>
        </section>
    )
}