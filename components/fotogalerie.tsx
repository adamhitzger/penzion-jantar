"use client"

import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"
import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

export default function Photogallery({images}: {images: string[]}){
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState<number>(0)

    useEffect(() => {
        if(!api){
            return
        }
        api.scrollTo(current)
    }, [current,api])
     const plugin = useRef(
            Autoplay({ delay: 3000, stopOnInteraction: true })
          )
    return(
        <section id="fotogalerie" className="flex flex-col w-full space-y-5  p-4 md:p-8 2xl:p-12">
             <h1 id="my-title4" className="font-averia text-6xl sm:text-7xl text-black text-right">Fotogalerie</h1>
            <div className="w--fit mx-auto grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {images.map((i:string, idx:number) => (
            <Dialog key={idx}>
            <DialogTrigger asChild>
               <Image onClick={() => setCurrent(idx)} className="rounded-[10px] w-full" key={idx} width={500} height={400} alt="Penzion Jantar Havlíčkův Brod" src={i}/>
            </DialogTrigger>
            <DialogContent className="text-white p-0 border-0 rounded-[10px]">
                 <Carousel 
            className="w-full max-w-7xl"
            plugins={[plugin.current]}
            opts={{
    align: "start",
    loop: true,
  }}
  setApi={setApi}
    >
      <CarouselContent>
      {images.map((im:string, i: number) => (
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
        ))}
            </div>
        </section>
    );
}