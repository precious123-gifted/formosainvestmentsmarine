
import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { Pontano_Sans } from "next/font/google";
import HeaderContent from "./HeaderContent";





const pontanoSans = Pontano_Sans({subsets: ["latin"],weight: "400"})
export default async function Header() {


    const client = createClient()

    const settings = await client.getSingle('settings')


  return (
    <section className="flex justify-center  bg-[#162226] "  style={pontanoSans.style}>
<HeaderContent settings={settings}/>
 
    </section>
  )
}
