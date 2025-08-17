"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import { HomeSchema } from "@/types"
import { StarIcon } from "lucide-react"
import Image from "next/image"
import { useGsapFadeIn } from "./useGsapFadeIn"

export default function Reviews({reviews}: {reviews: HomeSchema}){
    useGsapFadeIn("#my-title6")
    return(
        <section id="recenze" className="w-full flex flex-col text-right space-y-5  p-4 md:p-8 2xl:p-12">
            <h1 id="my-title6" className="font-averia text-6xl  sm:text-7xl text-black">Recenze</h1>
            <p className="text-xl">
                Děkujeme všem, kteří u nás strávili pobyt a podělili se o své dojmy. Vaše zpětná vazba je pro nás nesmírně cenná – pomáhá nám zlepšovat služby a zároveň nás utvrzuje v tom, že má naše práce smysl.
Níže si můžete přečíst zkušenosti hostů, kteří u nás hledali pohodlí, klid i příjemnou atmosféru – a našli přesně to, co očekávali. Věříme, že i vám jejich hodnocení pomohou při rozhodování.
Ať už jste přijeli na jednu noc nebo na delší pobyt, snažíme se, aby se u nás každý cítil dobře. O to větší radost máme, když nám hosté napíšou, že se k nám
            </p>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {reviews.reviews && reviews.reviews.map((r,i:number) => (
                    <Link className="w-full bg-input rounded-[10px]" key={i} href={r.author_url}>
                    <div  className="w-full flex flex-col justify-between text-left p-4 text-xl space-y-4">
                        <i className="font-light">{r.text.substring(0,200)}</i>
                        <div className="w-full flex flex-row justify-between">
                        <div className="flex flex-row">
                            {Array.from({length: r.rating}).map((_,i) => (
                        <StarIcon key={i}  color="#a99d2a" fill="#a99d2a"/>
                    ))}
                        </div>
                        <div className="flex flex-col space-y-2 items-end">
                            {r.author_name}
                            
                        </div>
                        
                        </div>
                        <Image className="self-end" src={"/google.png"} alt="Google logo" width={24} height={24}/>
                    </div>
                    
                    </Link>
                ))}
            </div>

            <Link className="mx-auto" href={"https://www.google.com/search?client=opera&hs=qld&sca_esv=cb6d5bace73091a1&tbm=lcl&sxsrf=AE3TifP20beEjIJaTDx2PLBHW3c-DvXZCA:1755340610032&q=Penzion+Jantar+Recenze&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2MjczMjGxtDCyNDMxMzI3MrEw3sDI-IpRLCA1ryozP0_BKzGvJLFIISg1GSiQuogVhwQAjIVXLkwAAAA&rldimm=2762449829646272483&hl=cs-CZ&sa=X&ved=2ahUKEwjmg5WskY-PAxUwgf0HHYI9FW8Q9fQKegQIJhAF&biw=1376&bih=800&dpr=2#lkt=LocalPoiReviews"}>
            <Button className="rounded-[10px] text-xl ">
                        Odeslat
                    </Button>
                    </Link>
        </section>
    )
}