import { groq } from "next-sanity";

export const HOMEPAGE_QUERY = groq`*[_type == "homepage"][0]{
    "headerImages": headerImages[].asset->url,
    "galleryImages": galleryImages[].asset->url,
    "aboutImages":aboutImages[].asset->url,
    reviews {
        author_name,
        author_url,
        text,
        rating
    }[],
    lokalita {
        name,
        "img": img.asset->url,
        text,
        link
    }[],
    rooms {
    name,
        "img":img.asset->url,
        "imgs":imgs[].asset->url,
        price
    }[]
}`

export const RAD_QUERY = groq`*[_type == "homepage"][0]{
    ubytovaciRad
}`