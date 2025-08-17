"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"

export default function Header({images}: {images: string[]}){
    const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )
    return(
        <header className="w-full">
            <Carousel 
            className="w-full"
            plugins={[plugin.current]}
            opts={{
    align: "start",
    loop: true,
  }}
            >
      <CarouselContent>
        {images.map((i, index) => (
          <CarouselItem key={index}>
            <div className="w-full h-96 md:h-[32rem] bg-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${i})`}}>
              
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
        </header>
    )
}