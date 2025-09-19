"use client"

import { HomeSchema } from "@/types"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"
import { Tv, Wifi } from "lucide-react"
import { useGsapFadeIn } from "./useGsapFadeIn"
import { PortableText } from "next-sanity"
export default function Rooms({rooms}: {rooms:HomeSchema}){
     const plugin = useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
      )
      const plugin2 = useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
      )
     useGsapFadeIn("#my-title")
    return(
         <section  id="ubytovani" className="flex flex-col w-full space-y-5  p-4 md:p-8 2xl:p-12">
            <h1 id="my-title" className="font-averia text-6xl sm:text-7xl text-black">{rooms.ubytHeading}</h1>
            <PortableText value={rooms.ubytText}/>
<Carousel 
            className="w-full h-[550px] max-w-7xl"
            plugins={[plugin.current]}
            opts={{
    align: "start",
    loop: true,
  }}
            >
      <CarouselContent className="h-[550px]">
        {rooms.rooms.map((i, index) => (
          <CarouselItem key={index} className="h-full m-auto  sm:basis-1/2 lg:basis-1/3 2xl:basis-1/4">
            <div className="ml-6 rounded-[15px] bg-foreground flex flex-col  space-y-3 p-4 shadow-lg w-72">
                <h1 className="font-semibold text-center text-3xl text-card">{i.name}</h1>
                
                <Image alt={i.name} src={i.img} width={700} height={100} className="rounded-[10px]"/>
                <div className="w-full flex flex-row justify-between">
                    <Wifi strokeWidth={2} className="size-8 text-white"/>

         <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" 
     viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" 
     strokeLinecap="round" strokeLinejoin="round">

  <line x1="12" y1="2" x2="12" y2="6" />

  <path d="M6 12a6 6 0 0 1 12 0z" />

  <line x1="7.5"  y1="14" x2="7.5"  y2="16" />
  <line x1="10.5"  y1="14" x2="10.5"  y2="16" />
  <line x1="13.5" y1="14" x2="13.5" y2="16" />
  <line x1="16.5" y1="14" x2="16.5" y2="16" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="32" height="32">

  <circle cx="25" cy="25" r="22" stroke="white" strokeWidth="2" fill="none"/>

  <line x1="10.36" y1="10.36" x2="39.64" y2="39.64" stroke="white" strokeWidth="2"/>

  <g fill="white">
    <circle cx="25" cy="28" r="8"/>
    <circle cx="15" cy="20" r="4"/>
    <circle cx="35" cy="20" r="4"/>
    <circle cx="21" cy="12" r="3"/>
    <circle cx="29" cy="12" r="3"/>
  </g>
</svg>




                    <Tv strokeWidth={1} className="size-8 text-white"/>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
     viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1"
     strokeLinecap="round" strokeLinejoin="round">

  <rect x="6" y="2" width="12" height="20" rx="2" ry="2" />

  <line x1="6" y1="10" x2="18" y2="10" />

  <line x1="17" y1="6" x2="17" y2="8" />
  <line x1="17" y1="12" x2="17" y2="14" />
</svg>
                </div>
                <p className="text-right text-2xl font-semibold text-white">
                    {i.price} Kč vč DPH
                </p>
<div className="flex flex-row justify-between gap-3">
  <Dialog>
    <DialogTrigger className="bg-white h-12 p-2 w-36 rounded-[10px] text-xl font-semibold">
      Galerie
    </DialogTrigger>
    <DialogContent className="text-white sm:max-w-[625px] rounded-[10px] border-0 p-0">
       <Carousel 
            className="w-full max-w-7xl"
            plugins={[plugin2.current]}
            opts={{
    align: "start",
    loop: true,
  }}
            >
      <CarouselContent>
      {i.imgs.map((im:string, i: number) => (
         <CarouselItem key={i}>
            <div className="w-full h-96 md:h-[32rem] rounded-[8px]  bg-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${im})`}}>
              
            </div>
          </CarouselItem>
      ))}
      </CarouselContent>
       <CarouselNext/>
      <CarouselPrevious/>
      </Carousel>
    </DialogContent>
  </Dialog>
                 <Link href={"/#rezervace"}>
            <Button className="rounded-[10px] text-lg md:text-xl ">
                        Zarezervovat
                    </Button>
                    </Link>
                    </div>
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