import { sanityFetch } from "@/sanity/lib/client"
import { components } from "@/sanity/lib/components"
import { RAD_QUERY } from "@/sanity/lib/query"
import { PortableText } from "next-sanity"

export default async function UbytovaciRad(){
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ubytovaciRad = await sanityFetch({query: RAD_QUERY}) as any
    return(
        <section className="p-4 md:p-8 xl:p-16 text-xl">
            <PortableText value={ubytovaciRad.ubytovaciRad} components={components}/>
        </section>
    )
}