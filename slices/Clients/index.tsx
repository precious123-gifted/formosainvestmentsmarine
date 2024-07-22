"use client"


import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from '../../app/components/Bounded';
import React, { MutableRefObject, useRef } from "react";

/**
 * Props for `Clients`.
 */
export type ClientsProps = SliceComponentProps<Content.ClientsSlice>;

/**
 * Component for "Clients" Slices.
 */
const Clients = ({ slice }: ClientsProps): JSX.Element => {


  type ProductRef = MutableRefObject<HTMLDivElement | null>;

  const productrefs = useRef<ProductRef[]>([]);
  const headerref = useRef(null)
  const button = useRef(null)



  return (
    <Bounded
    // data-slice-type={slice.slice_type}
    // data-slice-variation={slice.variation}
   className="  text-[#333D3E] bg-[#EDF4F6]" 
    >
<div className="content w-full flex flex-col items-center  pb-[2vw] space-y-[4vw] portrait:space-y-[12vw]"> 
<div className="clients_writeup_lead text-center mb-1 portrait:mt-10  portrait:mb-1 mt-4 text-[2vw]  portrait:text-[6vw] portrait:sm:text-[3vw]">{slice.primary.writeup}</div>

        <div ref={headerref} className="heading   text-[3vw] portrait:sm:text-[7vw] portrait:text-[10vw]  portrait:mb-10">{slice.primary.header}</div>


      </div>
      </Bounded>
  );
};

export default Clients;
