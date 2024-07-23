"use client"

import Bounded from "@/app/components/HeroBounded";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import Link from "next/link";
import backgroundImage from "../../public/bg_image.jpg"
import { useEffect, useRef } from "react";
import displayElementWhenPageLoads from "@/app/animation-provider/animation";
import AnimatedText from "@/app/components/spinningcircle/AnimatedText";



/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */









const Hero = ({ slice }: HeroProps): JSX.Element => {

  const button = useRef(null)
  const header = useRef(null)
  const header2 = useRef(null)

  
  



  
  
    const loadingAnimation = useEffect(()=>{
  
      displayElementWhenPageLoads(button,0.5,450)
      displayElementWhenPageLoads(header,0.5,750)
      displayElementWhenPageLoads(header2,0.5,760)
    },[])




  return (
    <Bounded
    data-slice-type={slice.slice_type}
    data-slice-variation={slice.variation}
   className="   portrait:text-[#E7FEFF] portrait:pt-2 overflow-hidden " >
   
  <div className=" content w-full  flex   portrait:flex-col  h-[40vw] portrait:h-[80vh] object-fit">
  <div className="hero bg-cover bg-no-repeat  overflow-hidden">
  <Image
    src={backgroundImage}
    alt="Background"
    className="object-cover h-[38vw] portrait:h-[35vh]"
  />
 
</div>
<div className="headersection absolute  h-full portrait:h-[70%] portrait:sm:h-[86%] pt-10 portrait:pt-[10vw] portrait:justify-between flex flex-col items-center   w-full">

<div className="btn-div  h-[10vw] portrait:h-[36vw] w-[90%] flex flex-col justify-between items-center"> 
<div ref={header} className="header1 opacity-0 text-[3.7vw]  portrait:text-[7vw] text-center leading-tight  tracking-free bg-[#6E2424] text-[#FBFFFE]">{slice.primary.header1}</div>
<div ref={header2} className="header1 opacity-0 text-[3vw]  portrait:text-[6vw] text-center leading-tight  tracking-free portrait:hidden text-[#FBFFFE]">{slice.primary.header2}</div>
</div>


  <div className="btn-div  h-[20vw]  w-full flex justify-center items-center"> 
  
<div className="circle h-[20vw] w-[20vw]  landscape:ml-[50vw] portrait:ml-[-50vw] portrait:mt-[-20vw] rounded-full">
<AnimatedText/>
</div>

   </div>


</div>


  </div>


  </Bounded>
  );
};

export default Hero;