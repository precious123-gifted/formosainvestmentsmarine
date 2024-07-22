"use client"


import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from '../../app/components/Bounded';
import { PrismicNextImage } from "@prismicio/next";
import React, { MutableRefObject, RefObject, useRef } from "react";
import { InView } from "react-intersection-observer";
import gsap from "gsap";

/**
 * Props for `Homeservices`.
 */
export type HomeservicesProps = SliceComponentProps<Content.HomeservicesSlice>;

/**
 * Component for "Homeservices" Slices.
 */
const Homeservices = ({ slice }: HomeservicesProps): JSX.Element => {

  type ProductRef = MutableRefObject<HTMLDivElement | null>;

  const productrefs = useRef<ProductRef[]>([]);
  const imagerefs = useRef<ProductRef[]>([]);
  const writeuprefs = useRef<ProductRef[]>([]);
  const headerrefs = useRef<ProductRef[]>([]);
  const header2refs = useRef<ProductRef[]>([]);
  const headerref = useRef(null)
  const button = useRef(null)


  const opacityAnimation = (ref: RefObject<HTMLDivElement>, time: number,inView:boolean) => {
  
    gsap.to(ref.current, time, {
      opacity: inView? '100%':'0',
      scrub: 1,
      ease: "expo.in",
    });
  
 
  };

  type SplitHeaderRef = MutableRefObject<HTMLSpanElement | null>;

  const splitheaderrefs = useRef<SplitHeaderRef[]>([]);

  const opacityAndLetterAnimation = (ref: RefObject<HTMLSpanElement> , time: number, inView: boolean) => {
  
  

  
    const timeline = gsap.timeline();
  splitheaderrefs.current.forEach((ref)=>{
 timeline.to(ref.current, time, { opacity: inView ? 1 : 0, ease: "power1.easeIn" });
    timeline.play(); 

  })
  
 
  };



  return (
    <Bounded
    // data-slice-type={slice.slice_type}
    // data-slice-variation={slice.variation}
   className="  text-[#333D3E] bg-[#EDF4F6]" 
    >
<div id="services" className="content w-full flex flex-col items-center pt-[10vw]  pb-[6vw] space-y-[8vw] portrait:space-y-[12vw]"> 
 

<div>
        {slice.primary.header?.split('').map((letter,index)=>(

<span key={index} className="relative">

<InView as="div" onChange={(inView, entry) => opacityAndLetterAnimation(splitheaderrefs.current[index],0.1,inView)} className="absolute"/>

<span key={index} ref={splitheaderrefs.current[index] = React.createRef<HTMLSpanElement>()} 
 className="heading opacity-0 text-[2vw] portrait:sm:text-[4vw] portrait:text-[6vw]  portrait:mb-10 ">
  {letter}
 </span>
</span>
))}
</div>

<div className="hairsection w-full ">


  
          
         

      

      <div className="space-y-16 flex flex-col items-center  ">
        <div   className="ProductsContainer w-full grid  portrait:grid-cols-1 landscape:grid-cols-2  gap-1 portrait:gap-[4vw] portrait:sm:gap-[4vw]   gap-y-1"> 
        {slice.primary.services_container.map((product:any,index:number) => (
          <div
            key={product._id}
            id={`services${index}`}
            ref={productrefs.current[index] = React.createRef<HTMLDivElement>()}
            // onClick={()=>{microActionOnProductClick(productrefs.current[index])}}
            className="hairProduct   transition duration-200 ease-in
              w-auto flex flex-col items-center text-start  space-y-1"
          >
            <div className="flex flex-col items-start">
<InView as="div" onChange={(inView, entry) => opacityAnimation(imagerefs.current[index],0.4,inView)}>
            
            <div 
            ref={imagerefs.current[index] = React.createRef<HTMLDivElement>()} className="productImage opacity-0 cursor-pointer w-[47vw] mb-3 portrait:w-full object-contain">
                <PrismicNextImage  field={product.service_image} className="rounded-md"/>
              </div>
</InView>

{/* <InView as="div" onChange={(inView, entry) => opacityAnimation(headerrefs.current[index],0.4,inView)}>

              <div
            ref={headerrefs.current[index] = React.createRef<HTMLDivElement>()}
              
              className="productTitle opacity-0 w-[30vw] portrait:w-full  cursor-pointer text-[1.6vw] portrait:text-[6vw]  portrait:text-wrap mb-1 portrait:mb-3"><div >{product.service_header1}</div></div>
</InView>

<InView as="div" onChange={(inView, entry) => opacityAnimation(header2refs.current[index],0.4,inView)}>

              <div
            ref={header2refs.current[index] = React.createRef<HTMLDivElement>()}
              
              className="productTitle opacity-0 w-[30vw] portrait:w-full  cursor-pointer text-[1.6vw] portrait:text-[6vw]  portrait:text-wrap mb-1 portrait:mb-3"><div >{product.service_header2}</div></div>

</InView>

<InView as="div" onChange={(inView, entry) => opacityAnimation(writeuprefs.current[index],0.4,inView)}>

            <div 
            ref={writeuprefs.current[index] = React.createRef<HTMLDivElement>()}
            
            className="productDescription opacity-0 w-[30vw] portrait:w-full  cursor-pointer text-[1.19vw]  portrait:text-[4vw] portrait:sm:text-[3vw]">{product.service_writeup}</div>

</InView> */}


            </div>
          </div>
        ))}


      </div>

  
      </div>
      </div>
      </div>
      </Bounded>
  );
};

export default Homeservices;
