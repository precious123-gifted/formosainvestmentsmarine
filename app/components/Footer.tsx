import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Bounded from "./FooterBounded";
import Image from "next/image";
import gmailIcon from "../../public/gmailIcon.png";
import whatsappIcon from "../../public/whatsappIcon.png";
import instagramIcon from "../../public/instagramIcon.png";
import facebookIcon from "../../public/facebookIcon.png";
import footerBG from "../../public/footer_bg.png"
import formosaIMG from "../../public/FORMOSA.png"
import Link from "next/link";




export default async function Footer() {

    const client = createClient()

    const settings = await client.getSingle('settings')
    

let about = '/about'


  return (
    <Bounded>
    <div className="content relative landscape:h-[50vh] bg-[#EEF4F8] text-[#282E30]  w-full px-5 py-8 pt-20 flex  flex-col space-y-4    portrait:sm:justify-between portrait:flex-col portrait:space-y-6 portrait:sm:space-y-0  ">



  <Image
    src={footerBG}
    alt="Background"
    layout="fill"
    objectFit="cover"
    priority
    className=" w-full h-full  "
  />



<div className="details w-[98%] relative flex portrait:flex-col portrait:space-y-8 justify-between ">

<div className="addressNpolicySection space-y-3 landscape:w-[40%] portrait:sm:w-[100%]">

<div className="addressDiv  space-y-1">
  <div className="title text-[1.7vw] portrait:sm:text-[4vw] portrait:text-[7vw]">About Us</div>
 <Link href={'/about'}> <div className="address text-[1.2vw]  portrait:sm:text-[3vw] portrait:text-[5vw] ">Who We Are</div></Link>
 <Link href={'/missionandvision'}><div className="address text-[1.2vw]  portrait:sm:text-[3vw] portrait:text-[5vw]">Mission and Vision</div></Link>
</div>



</div>

{/* <div className="addressNpolicySection space-y-3 landscape:w-[40%] portrait:sm:w-[100%]">

<div className="addressDiv space-y-1">
  <div className="title text-[1.7vw] portrait:sm:text-[4vw] portrait:text-[7vw]">Address</div>
  <div className="address text-[1.2vw]  portrait:sm:text-[3vw] portrait:text-[5vw]"></div>
</div>



</div> */}

<div className="customerSupportSection w-[40%] portrait:w-full space-y-3">
  <div className="header text-[1.7vw] portrait:sm:text-[4vw] portrait:text-[7vw]">Customer Support</div>
 
 

    <div className="contactDiv space-y-2">
<div className="title text-[1.6vw] portrait:sm:text-[3.5vw] portrait:text-[6.5vw]">Contact Us</div>


<div className="icons flex flex-col "> 

<Link  href={`tel:+23414537731`} ><div className="text-[1.2vw]  portrait:sm:text-[3vw] portrait:text-[5vw]">+23414537731-2</div></Link>
<Link  href={`tel:+23414537731`} ><div className="text-[1.2vw]  portrait:sm:text-[3vw] portrait:text-[5vw]">+3168686421383</div></Link>
<Link  href={`mailto:info@formosa6js.com`} ><div className="text-[1.2vw]  portrait:sm:text-[3vw] portrait:text-[5vw]">info@formosa6js.com</div></Link>
<Link  href={`mailto:formosa6js@gmail.com`} ><div className="text-[1.2vw]  portrait:sm:text-[3vw] portrait:text-[5vw]">formosa6js@gmail.com</div></Link>




</div>






    </div>

</div>

</div>


{/* <div className="formosa text-[20vw] portrait:text-[18vw]">FORMOSA</div> */}




  
    </div>
  
  <div className="copyRightDiv relative flex portrait:flex-col justify-between px-5 py-2 bg-[#282E30] text-[#EEF4F8]  text-[1.2vw]  portrait:sm:text-[3vw] portrait:text-[3.7vw]  "> <div className="preciousOG">site by PreciousOG</div>   <div className="prodigital">© 2024 Formosa Investments - All Rights Reserved</div> </div>
  
  
  
      </Bounded>
  )
}
