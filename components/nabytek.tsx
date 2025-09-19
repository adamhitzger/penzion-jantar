"use client"
import { Hammer } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function NabytekButton(){
    const link = useRef<HTMLAnchorElement>(null)
    useEffect(() => {
         if (!link.current) return;
        gsap.fromTo(link.current, {
    y: -100,  
   opacity: 0
  }, {
    y: 0,     
    opacity: 1,
     duration: 1,       // délka animace
    ease: "bounce.out", // typ „odrazové“ animace
    yoyo: true,
    repeat: -1,
    repeatDelay: 2
  });
    },[])
    return(
         <Link ref={link} href={"https://www.jantar-nabytek.cz"} id="whatsapp"
        className="fixed bottom-6 right-6 z-40 size-18 rounded-full bg-foreground text-primary items-center justify-center flex flex-row shadow-lg"
      >
        <Hammer strokeWidth={1.5} className="size-10 text-white"/>
      </Link>
    )
}