"use client"

import Image from "next/image"
import Link from "next/link"
import {SocialIcon} from "react-social-icons"
import "react-social-icons/facebook"
function Dot(){
    return(
        <span className="hidden sm:inline px-2">|</span>
    )
}

export default function Footer(){
    return(
        <footer className="mt-1 w-full flex flex-col items-center bg-foreground p-5 text-white font-light text-lg space-y-1">
            <p className="space-y-0.5"><span className="block text-center sm:inline">Copyright &copy; 2025 <Link className="underline underline-offset-2" href={"/"}>Penzion Jantar</Link> <Dot/></span> <span className="block text-center sm:inline">All rights reserved <Dot/></span> <Link className="block text-center sm:inline underline underline-offset-2" href={`/zpracovani-osobnich-udaju`}>Zásady zpracování osobních údajů</Link> <Dot/><span className="block text-center sm:inline">
           
             <Link className="block text-center sm:inline underline underline-offset-2" href={`/ubytovaci-rad`}>Ubytovací řád</Link><Dot/><SocialIcon url={"https://www.facebook.com/?locale=cs_CZ"} style={{ height: 25, width: 25}} target='_blank' network={"facebook"} /> 
            
        </span></p>
            <span>Developed by <Link className="underline underline-offset-2" href={"https://www.adamhitzger.com"}>Adam Hitzger</Link></span>
            <Image src={"/logo-black.png"} alt="Logo PMK Partners" width={200} height={100}/>
        </footer>
    )
}