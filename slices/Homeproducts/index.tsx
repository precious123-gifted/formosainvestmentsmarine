"use client"

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from '../../app/components/Bounded';
import React, { MutableRefObject, RefObject, useRef } from "react";
import Link from "next/link";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicNextLink } from "@prismicio/next";
import { InView } from "react-intersection-observer";
import SplitType from "split-type";
import gsap from "gsap";

/**
 * Props for `Homeproducts`.
 */
export type HomeproductsProps = SliceComponentProps<Content.HomeproductsSlice>;

/**
 * Component for "Homeproducts" Slices.
 */
const Homeproducts = ({ slice }: HomeproductsProps): JSX.Element => {

  type ProductRef = MutableRefObject<HTMLDivElement | null>;
  type SplitHeaderRef = MutableRefObject<HTMLSpanElement | null>;

  const productrefs = useRef<ProductRef[]>([]);
  const headerref = useRef(null)
  const button = useRef(null)
  const buttonwritup = useRef(null)
  const imagerefs = useRef<ProductRef[]>([]);
  const writeuprefs = useRef<ProductRef[]>([]);
  const headerrefs = useRef<ProductRef[]>([]);
  const splitheaderrefs = useRef<SplitHeaderRef[]>([]);
  const splittitlerefs = useRef<SplitHeaderRef[]>([]);


  const opacityAnimation = (ref: RefObject<HTMLDivElement>, time: number,inView:boolean) => {
  
    gsap.to(ref.current, time, {
      opacity: inView? '100%':'0',
      scrub: 1,
      ease: "expo.in",
    });
  
 
  };


  const opacityAndLetterAnimation = (ref: RefObject<HTMLSpanElement> , time: number, inView: boolean) => {
  
  

  
    const timeline = gsap.timeline();
  splitheaderrefs.current.forEach((ref)=>{
 timeline.to(ref.current, time, { opacity: inView ? 1 : 0, ease: "power1.easeIn" });
    timeline.play(); 

  })
  
 
  };
  const opacityAndLetterAnimation2 = (ref: RefObject<HTMLSpanElement> , time: number, inView: boolean) => {
  
  

  
    const timeline = gsap.timeline();
    splittitlerefs.current.forEach((ref)=>{
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
<div className="content w-full flex flex-col items-center pt-[10vw]  pb-[6vw] space-y-[8vw] portrait:space-y-[12vw]"> 
<div>
{slice.primary.header?.split('').map((letter,index)=>(

  <span key={index} className="relative">
  
<InView as="div" onChange={(inView, entry) => opacityAndLetterAnimation(splitheaderrefs.current[index],0.1,inView)} className="absolute"/>
 
  <span key={index} ref={splitheaderrefs.current[index] = React.createRef<HTMLSpanElement>()} 
   className="heading opacity-0 text-[3vw] portrait:sm:text-[7vw] portrait:text-[10vw]  portrait:mb-10 ">
    {letter}
   </span>
</span>
))}
</div>



<div className="hairsection w-full ">


  
          
         

      

      <div className="space-y-16 flex flex-col items-center  ">
        <div   className="hairProductsContainer w-full grid  portrait:grid-cols-1 landscape:grid-cols-3  gap-5 portrait:gap-[23vw] portrait:sm:gap-[20vw]   gap-y-20"> 
        {slice.primary.product_container.map((product:any,index:number) => (
          <div
            key={product._id}
            id={product._id}
            ref={productrefs.current[index] = React.createRef<HTMLDivElement>()}
            // onClick={()=>{microActionOnProductClick(productrefs.current[index])}}
            className="hairProduct   transition duration-200 ease-in
              w-auto flex flex-col items-center text-start  space-y-1"
          >
            <div className="flex flex-col items-start">
            <InView as="div" onChange={(inView, entry) => opacityAnimation(imagerefs.current[index],0.4,inView)}>
<div
ref={imagerefs.current[index] = React.createRef<HTMLDivElement>()}
className="productImage cursor-pointer w-[18vw] mb-3 portrait:w-full object-contain">
                <PrismicNextImage  field={product.product_image} className="rounded-md"/>
              </div>

            </InView>

              
       <div key={index} className="relative" >
             {/* {product.title.split('').map((letter:any,index:number)=>(


<InView as="span" key={index} 
onChange={(inView, entry) => opacityAndLetterAnimation2(splittitlerefs.current[index],0.1,inView)}
   className="productTitle  w-[12vw] portrait:w-full  cursor-pointer text-[1.6vw] portrait:text-[6vw] text-nowrap portrait:text-wrap mb-1 portrait:mb-3"
  > <span className="opacity-0"
ref={splittitlerefs.current[index] = React.createRef<HTMLSpanElement>()}
  
  > {letter}</span> </InView>

 
))}  */}
              
              <InView as="div" key={index} 
onChange={(inView, entry) => opacityAnimation(headerrefs.current[index],0.1,inView)}
   className="productTitle  w-[12vw] portrait:w-full  cursor-pointer text-[1.6vw] portrait:text-[6vw] text-nowrap portrait:text-wrap mb-1 portrait:mb-3"
  > <span className="opacity-0"
ref={headerrefs.current[index] = React.createRef<HTMLDivElement>()}
  
  > {product.title}</span> </InView>     
              
              </div> 


<InView as="div" onChange={(inView, entry) => opacityAnimation(writeuprefs.current[index],0.4,inView)}>

 <div 
            ref={writeuprefs.current[index] = React.createRef<HTMLDivElement>()}
            
            className="productDescription opacity-0 w-[20vw] portrait:w-full  cursor-pointer text-[1.19vw]  portrait:text-[4vw] portrait:sm:text-[3vw]">{product.description}</div>


</InView>

           

            </div>
          </div>
        ))}


      </div>

      <div className="btn-div   w-full flex flex-col  items-center"> 

      <InView as="div" onChange={(inView, entry) => opacityAnimation(buttonwritup,0.4,inView)}>
      <div className="btn_writeup_lead opacity-0 text-center mb-8 portrait:mb-14 mt-4 text-[2vw]  portrait:text-[6vw] portrait:sm:text-[3vw]">{slice.primary.button_intro_text}</div>


</InView>

<InView as="div" onChange={(inView, entry) => opacityAnimation(button,0.4,inView)}>
<PrismicNextLink  field={slice.primary.all_products_button}> <div ref={button} className="button opacity-0 bg-[#423B17] text-[#EDF4F6] cursor-pointer portrait:px-[22vw] px-[8vw] py-3 rounded-[0.280rem] text-[2vw] portrait:text-[8vw] hover:bg-[#252d2e] duration-[0.2s]  ease-in-out "> All Products</div> </PrismicNextLink> 

</InView>

  
   </div>
      </div>
      </div>
      </div>
      </Bounded>
  );
};

export default Homeproducts;
