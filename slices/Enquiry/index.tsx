
"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from '../../app/components/Bounded';
import Image from "next/image";
import oilrig from "../../public/oilrig.png"
import servermailer from "./servermailer"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


/**
 * Props for `Enquiry`.
 */
export type EnquiryProps = SliceComponentProps<Content.EnquirySlice>;

interface FormData {
  name: string;
  company_name: string;
  email: string;
  phone_number: string;
  enquiry: string;
}

/**
 * Component for "Enquiry" Slices.
 */
const Enquiry = ({ slice }: EnquiryProps): JSX.Element => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company_name: '',
    email: '',
    phone_number: '',
    enquiry: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
    servermailer(formData)
      console.log('Email sent successfully');
      toast.success('Email sent successfully')
      setFormData({
        name: '',
        company_name: '',
        email: '',
        phone_number: '',
        enquiry: ''
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      toast.error('failed to send enquiry')
    }
  };

  return (
    <>
  <ToastContainer/>

    <Bounded className="text-[#333D3E] bg-[#EDF4F6]">

      <div className="content w-full flex landscape:justify-between portrait:flex-col portrait:items-center pb-[6vw] pt-10 space-y-[4vw] portrait:space-y-[12vw]">
        <div className="form w-[50%] portrait:w-full">
          <div className="clients_writeup_lead mb-4 portrait:mt-10 portrait:mb-10 mt-4 text-[2vw] portrait:text-[6vw] portrait:sm:text-[3vw]">{slice.primary.writeup}</div>

          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <div className="inputs w-full grid portrait:grid-cols-1 landscape:grid-cols-2 gap-5 portrait:gap-[6vw] portrait:sm:gap-y-[6vw] gap-y-6">
              <input 
                required 
                type="text" 
                className='brandname outline-none h-[3vw] portrait:h-[14vw] px-3 text-[#EDF4F6] bg-[#2F3D47] rounded-md' 
                name="name" 
                placeholder='Name' 
                value={formData.name}
                onChange={handleChange}
              />
              <input 
                required 
                type="text" 
                className='title outline-none h-[3vw] portrait:h-[14vw] px-3 text-[#EDF4F6] bg-[#2F3D47] rounded-md' 
                name="company_name" 
                placeholder='Company Name'
                value={formData.company_name}
                onChange={handleChange}
              />
              <input 
                required 
                type="email" 
                className='shortdescription outline-none h-[3vw] portrait:h-[14vw] px-3 text-[#EDF4F6] bg-[#2F3D47] rounded-md' 
                name="email" 
                placeholder='Email'
                value={formData.email}
                onChange={handleChange}
              />
              <input 
                required 
                type="tel" 
                className='shortdescription outline-none h-[3vw] portrait:h-[14vw] px-3 text-[#EDF4F6] bg-[#2F3D47] rounded-md' 
                name="phone_number" 
                placeholder='Phone Number'
                value={formData.phone_number}
                onChange={handleChange}
              />
              <textarea 
                required 
                className='fulldescription w-[48.5vw] portrait:w-full outline-none h-[12vw] resize-none portrait:h-[28vw] px-3 py-1 text-[#EDF4F6] bg-[#2F3D47] rounded-md' 
                name="enquiry" 
                placeholder='Write down Your Enquiry'
                value={formData.enquiry}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn mt-10 portrait:w-full bg-[#423B17] text-[#EDF4F6] cursor-pointer portrait:px-[22vw] px-[6vw] py-3 rounded-[0.280rem] text-[1.8vw] portrait:text-[8vw] hover:bg-[#252d2e] duration-[0.2s] ease-in-out">
              Submit
            </button>
          </form>
        </div>

        <div className="svg w-[30%] portrait:w-full">
          <Image src={oilrig} alt="oilrig_svg" className="object-fit" />
        </div>
      </div>
    </Bounded>
    </>
  );
};

export default Enquiry;