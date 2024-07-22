"use client"

import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import SmoothScroller from '../smoothscroll'


export default function Homepage({Children}:any) {



 


  return (

    <>
   
       <SmoothScroller> 
        
    {Children}
       
    </SmoothScroller>
     
           

    
    </>
    
  )
}
