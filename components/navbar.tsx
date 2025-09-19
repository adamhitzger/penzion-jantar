"use client"

import Link from "next/link"
import Image from "next/image"
import { navLinks } from "@/constants"
import { NavLink } from "@/types"
import { SocialIcon } from "react-social-icons"
import "react-social-icons/facebook"
import "react-social-icons/instagram"
import { Button } from "./ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function Navbar(){
    
    return(
        <nav className="flex flex-row w-full justify-between items-center p-4 md:p-8 bg-foreground">
            <Link href={"/"}>
                <Image src={"/logo-black.png"} alt="Logo Penzionu Jantar" width={256} height={200}/>
            </Link>

            <div className="text-2xl text-white hidden xl:flex flex-row items-center space-x-8">
                {navLinks.map((l: NavLink, i: number) => (
                    <Link key={i} href={l.link} className="text-nowrap">
                        {l.value}
                    </Link>
                ))}

                <SocialIcon url="https://www.facebook.com/people/Penzion-Jantar/61568191995622/?rdid=g57snBm7FJeGgLfj&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19q3WDPxAQ%2F" style={{width: 36, height: 36}} network="facebook"/>
 <SocialIcon url="https://www.instagram.com/penzionjantarhb/#" style={{width: 36, height: 36}} network="instagram"/>

                <Link href={"/#rezervace"}>
                    <Button className="text-black bg-white rounded-[25px] ">
                        Rezervovat
                    </Button>
                </Link>
            </div>

            <Sheet>
                <SheetTrigger asChild>
        <Menu color="white" width={48} height={48} className="xl:hidden flex"/>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
             <Link href={"/"}>
                <Image src={"/logo-black.png"} alt="Logo Penzionu Jantar" width={256} height={200}/>
            </Link>
          </SheetTitle>
                <div className="text-2xl  flex flex-col p-4 space-y-8">
                {navLinks.map((l: NavLink, i: number) => (
                    <Link key={i} href={l.link} className="text-black">
                        {l.value}
                    </Link>
                ))}

                <SocialIcon url="https://www.facebook.com/people/Penzion-Jantar/61568191995622/?rdid=g57snBm7FJeGgLfj&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19q3WDPxAQ%2F" network="facebook"/>
 <SocialIcon url="https://www.instagram.com/penzionjantarhb/#"  network="instagram"/>

                <Link href={"/#rezervace"}>
                    <Button className="bg-black text-white rounded-[25px] ">
                        Rezervovat
                    </Button>
                </Link>
            </div>
        </SheetHeader>
        
      </SheetContent>
            </Sheet>
        </nav>
    )
}