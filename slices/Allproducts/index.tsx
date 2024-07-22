"use client"

import Bounded from "@/app/components/Bounded";
import { Client, Content } from "@prismicio/client";
import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import React, { MutableRefObject, useRef } from "react";

/**
 * Props for `Allproducts`.
 */
export type AllproductsProps = SliceComponentProps<Content.AllproductsSlice>;

/**
 * Component for "Allproducts" Slices.
 */
const Allproducts = ({ slice }: AllproductsProps): JSX.Element => {

  type ProductRef = MutableRefObject<HTMLDivElement | null>;

  const productrefs = useRef<ProductRef[]>([]);
  const headerref = useRef(null)





  return (
    <Bounded className="bg-[#EDF4F6]   text-[#333D3E] pt-10 pb-[10vw]  portrait:pb-[20vw]">

<div className="heading  text-[3vw] portrait:text-[7vw] portrait:sm:text-[7.2vw] mb-[8vw]  portrait:mb-[20vw] text-center">All Products</div>


<div   className="hairProductsContainer w-full grid  portrait:grid-cols-1 landscape:grid-cols-3  gap-5 portrait:gap-[23vw] portrait:sm:gap-[20vw]   gap-y-20"> 
        {slice.primary.product.map((product:any,index:number) => (
          <div
            key={product._id}
            id={product._id}
            ref={productrefs.current[index] = React.createRef<HTMLDivElement>()}
            // onClick={()=>{microActionOnProductClick(productrefs.current[index])}}
            className="hairProduct   transition duration-200 ease-in-out 
              w-auto flex flex-col items-center text-start  space-y-1"
          >
            <div className="flex flex-col items-start">
              <div className="productImage cursor-pointer w-[18vw] mb-3 portrait:w-full object-contain">
                <PrismicNextImage  field={product.image} className="rounded-md"/>
              </div>

              <div className="productTitle w-[12vw] portrait:w-full  cursor-pointer text-[1.6vw] portrait:text-[6vw] text-nowrap portrait:text-wrap mb-1 portrait:mb-3"><div >{product.title}</div></div>
            <div className="productDescription w-[20vw] portrait:w-full  cursor-pointer text-[1.19vw]  portrait:text-[4vw] portrait:sm:text-[3vw]">{product.writeup}</div>
            </div>
          </div>
        ))}


      </div>

    </Bounded>
  );
};

export async function getServerSideProps() {
  const client = createClient()

  // Fetch data from Prismic using your Prismic client
  const settings = await client.getSingle('settings')

  const data = settings.data;

  return {
    props: {
      slice: data,
    },
  };
}


export default Allproducts;



