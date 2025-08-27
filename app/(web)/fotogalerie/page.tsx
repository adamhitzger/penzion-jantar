import Photogallery from "@/components/fotogalerie";
import { sanityFetch } from "@/sanity/lib/client";
import { FOTO_QUERY } from "@/sanity/lib/query";

export default async function FotogaleriePage(){
    const data = await sanityFetch<{galleryImages: string[]}>({query: FOTO_QUERY});
    console.log(data)
    
    return(
    <Photogallery images={data.galleryImages}/>
    )
}