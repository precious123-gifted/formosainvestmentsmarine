"use client"

import { PrismicNextImage, PrismicNextLink } from "@prismicio/next"
import React, { MouseEvent, MutableRefObject, TouchEvent, useEffect } from 'react';
import Image from "next/image"
import Link from "next/link"

import { useRef, useState } from "react";
import gsap from "gsap";
import { useStateContext } from "../StateManager";
import MenuSvg from "@/app/components/menuSvg"
import displayElementWhenPageLoads from "../animation-provider/animation";
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils";

export default function HeaderContent({settings}: any) {
  interface forString{
    label: any,
    link: any
    key:any
  }


  const menudiv = useRef(null)
  const desktoplinks = useRef(null)
  const exiticon = useRef(null)
  const menuicon = useRef(null)
  const logo = useRef(null)
  const carticon = useRef(null)
  const desktopcarticon = useRef(null)
  const itemquantitydiv = useRef(null)


  const pathname = usePathname();

  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  const serviceDropdownItems = [
    { label: "Sales", link: "/sales" },
    { label: "Supply", link: "/supply" },
    { label: "Marketing", link: "/marketing" },
    { label: "Bunkering", link: "/bunkering" },
    { label: "Offshore Intake-Offtake Facilities", link: "/offshore" },
    { label: "Petroleum & Gas Storage", link: "/storage" },
  ];

  const loadingAnimation = useEffect(()=>{
    displayElementWhenPageLoads(logo,0.5,150)
    displayElementWhenPageLoads(desktoplinks,0.5,300)
    displayElementWhenPageLoads(carticon,0.5,500)
    displayElementWhenPageLoads(desktopcarticon,0.5,400)
    displayElementWhenPageLoads(itemquantitydiv,0.5,420)
    displayElementWhenPageLoads(menuicon,0.5,650)
  })

  const{menu,setMenu} = useStateContext()

  const menuAnimation = () =>{
    gsap.to(menudiv.current,{top:menu?"-30vw":"13vw",opacity:menu?0:1})
  }

  const menuBackAnimation = () =>{
    if(menu == false) setMenu(!menu)
    if(showServicesDropdown)setShowServicesDropdown(false)

  }

  useEffect(()=>{
    menuAnimation()
    console.log(pathname)
  })


const serviceList = useRef(null)
const serviceListAnimation = () =>{
  gsap.to(serviceList.current,{left:showServicesDropdown?"0vw":"-100vw",})
}

useEffect(()=>{
serviceListAnimation()
})

  const navigation = { 
     "about": {
      label: "About",
      key: "about",
      link: "/about" 
    },
    "contact": {
      label: "Contact",
      key: "contact",
      link: "#contact" 
    },
  
  };
  const serviceTXT = useRef<HTMLDivElement>(null);

  interface OilProduct {
    title: string;
    price: string;
    percentage: string;
    unit: string;
    date: string;
  }


 


 

 

  return (
    <div className="w-[98%] portrait:w-[96%] portrait:flex-col portrait:flex">
      <div className="content w-full flex flex-row justify-between items-center pt-2">
        <div ref={logo} className="logo opacity-0 cursor-pointer object-contain w-[15vw] portrait:w-[32vw] pb-2">
          <Link onClick={menuBackAnimation} href={"/"}>
            <PrismicNextImage field={settings.data.logo} className="rounded-md" />
          </Link>
        </div>

        

        <div className="cartNmenuDiv landscape:hidden flex items-center relative space-x-8 portrait:sm:space-x-14">
          <div className="icon">
            <div
            
            ref={menuicon} className="menuicon opacity-0 landscape:hidden cursor-pointer object-contain">
              <MenuSvg className="" />
            </div>
          </div> 
        </div>

        <div ref={desktoplinks} className="links opacity-0  px-1 portrait:hidden w-auto space-x-[4vw] flex items-center  ">
          <ul className="flex justify-between items-center w-[80%] text-[1.5vw] space-x-[6vw]">
            <div 
              className="relative"
              onMouseEnter={() => setShowServicesDropdown(true)}
              onMouseLeave={() => setShowServicesDropdown(false)}
            >
                <div ref={serviceTXT} className="services-text px-3 py-2   cursor-pointer transition duration-300 ease-in-out text-[#ECDEDE]  shadow-lg">
                  Services
                </div>
              {showServicesDropdown && (
               <div className="pt-2 absolute z-50 left-0  w-48">
 <div className=" rounded-md shadow-lg hover:bg-[#e0f3e6] bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    {serviceDropdownItems.map((item, index) => (
                      <Link 
                        key={index} 
                        href={item.link}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#fcffff] hover:text-gray-900" 
                        role="menuitem"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

               </div>
              )}
            </div>

            {Object.values(navigation).map(({link,label,key}:forString) => {
              const isActive = pathname === key 
              const isActiveChild = key !== '/' && pathname.includes(`${key}`)
              const logic = !isActiveChild ? isActive : isActiveChild
              return(
                <div key={key}>
                  <Link href={link}
                    className={cn(
                      'px-3 py-2 h-full rounded transition duration-300 ease-in-out shadow-lg text-[#ECDEDE]  ',
                      logic && 'bg-[#162226] text-[#e8f7ed] hover:text-[#e0f3e6] ',
                    )}
                  >
                    {label}
                  </Link>
                </div>
              )
            })}
          </ul>
        </div>
      </div>

  

   

      


<div ref={menudiv} className="menu opacity-0 landscape:hidden portrait:space-x-6 w-full left-0 h-[24vw] bg-[#162226] text-[#e9e2e0]   absolute z-50 top-[-0vw] flex justify-center items-center ">


<div
onClick={() => setShowServicesDropdown(!showServicesDropdown)}
ref={serviceTXT} className="services-text px-3 py-2   rounded bg-[#FBFFFE] hover:bg-[#e0f3e6] cursor-pointer transition duration-300 ease-in-out text-[#0D2323]  shadow-lg">
    Services
  </div>
  {showServicesDropdown && (
              <div ref={serviceList} className="mt-[90vw]  absolute z-50 left-[100vw]  w-full">
              <div className=" rounded-md shadow-lg hover:bg-[#e0f3e6]  bg-[#FBFFFE] ring-1 ring-black ring-opacity-5">
                               <div className="py-1 space-y-2" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                 {serviceDropdownItems.map((item, index) => (
                                   <Link onClick={menuBackAnimation} 
                                     key={index} 
                                     href={item.link}
                                     className="block px-4 py-2  text-gray-700 hover:bg-[#fcffff] hover:text-gray-900" 
                                     role="menuitem"
                                   >
                                     {item.label}
                                   </Link>
                                 ))}
                               </div>
                             </div>
             
                            </div>
          )}

{Object.values(navigation).map(({link,label,key}:forString)=>
{
  const isActive = pathname  === key 
  const isActiveChild = key !== '/' && pathname.includes(`${key}`)
const logic = !isActiveChild? isActive : isActiveChild
const lastLink = '/about'
  return(
      
<div  key={key}
 >
<Link href={link}
onClick={menuBackAnimation}

 className={cn(
  'px-3 py-2 h-full rounded hover:bg-[#e0f3e6] bg-[#FBFFFE] transition duration-300 ease-in-out text-[#0D2323] ',
   logic && 'bg-[#162226] text-[#e8f7ed] hover:text-[#e0f3e6]  shadow-lg ' 
)}
 >{label}</Link>

</div>

)})}

</div>

    </div>
  )
}