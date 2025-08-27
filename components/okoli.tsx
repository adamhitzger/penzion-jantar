"use client"

import { HomeSchema } from "@/types"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"
import { useGsapFadeIn } from "./useGsapFadeIn"
import { PortableText } from "next-sanity"
export default function Okoli({lokalita}: {lokalita:HomeSchema}){
     const plugin = useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
      )
      useGsapFadeIn("#my-title3")

    return(
         <section  id="okoli" className="flex flex-col w-full space-y-5  p-4 md:p-8 2xl:p-12">
            <h1 id="my-title3" className="font-averia text-6xl sm:text-7xl text-black">{lokalita.okoliHeading}</h1>
            <PortableText value={lokalita.aboutText}/>
<Carousel 
            className="w-full h-[800px] max-w-7xl"
            plugins={[plugin.current]}
            opts={{
    align: "start",
    loop: true,
  }}
            >
      <CarouselContent className="h-[800px]">
        {lokalita.lokalita.map((i, index) => (
          <CarouselItem key={index} className=" md:basis-1/2 xl:basis-1/3 my-auto">
            <div className="p-5 rounded-[15px] h-[] bg-foreground flex flex-col items-end space-y-3 shadow-lg min-w-72 h-fit">
                <h1 className="font-averia text-center text-3xl text-card">{i.name}</h1>
                
                <Image alt={i.name} src={i.img} width={700} height={100} className="rounded-[10px]"/>
                
                <p className="text-lg text-center">
                    {i.text} 
                </p>

                 <Link className="" href={i.link}>
            <Button className="rounded-[10px] text-lg ">
                        Více informací
                    </Button>
                    </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext/>
      <CarouselPrevious/>
    </Carousel>

    
          </section>
    )
}