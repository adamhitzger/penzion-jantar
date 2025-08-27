import About from "@/components/about";
import Contact from "@/components/contact";
import Header from "@/components/header";
import Okoli from "@/components/okoli";
import Reviews from "@/components/recenze";
import Rezervace from "@/components/rezervace";
import Rooms from "@/components/rooms";
import { sanityFetch } from "@/sanity/lib/client";
import { HOMEPAGE_QUERY } from "@/sanity/lib/query";
import { HomeSchema } from "@/types";

export default async function Home() {
  const data = await sanityFetch<HomeSchema>({query: HOMEPAGE_QUERY}) as HomeSchema;
  console.log(data)
  return (
    <>
      <Header images={data.headerImages}/>
      <Rooms rooms={data} />
      <About images={data.aboutImages} heading={data.aboutHeading} text={data.aboutText}/>
      <Okoli lokalita={data}/>
      <Rezervace/>
      <Reviews reviews={data}/>
      <Contact/>
    </>
  );
}
