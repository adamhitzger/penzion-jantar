"use client"

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { useGsapFadeIn } from "./useGsapFadeIn";

export default function Photogallery({images}: {images: string[]}){
    const imagesHalf = images.length /2
    useGsapFadeIn("#my-title4")
    return(
        <section id="fotogalerie" className="flex flex-col w-full space-y-5  p-4 md:p-8 2xl:p-12">
             <h1 id="my-title4" className="font-averia text-6xl sm:text-7xl text-black text-right">Fotogalerie</h1>
                <InfiniteMovingCards
                images={images.slice(0,imagesHalf)}
                direction="right"
                speed="slow"
                />
                <InfiniteMovingCards
                images={images.slice(imagesHalf+1)}
                direction="left"
                speed="slow"
                />
        </section>
    );
}