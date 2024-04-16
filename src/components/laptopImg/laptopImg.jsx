"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { Box, HStack, useMediaQuery } from '@chakra-ui/react'
import LaptopImg from '@/img/LaptopCryptoDash.png'

const LaptopGradientWithImg = () => {
    const [isTablet] = useMediaQuery("(max-width: 1024px)");
    const [isMobile] = useMediaQuery("(max-width: 736px)");
    const [isPhone] = useMediaQuery("(max-width: 480px)");
    const [isVerySmall] = useMediaQuery("(max-width: 360px)");



const ImgRender = () =>{

    if(isTablet){
        return (
            <Image src={LaptopImg} alt="laptop" width={900} height={100}   />
        )
    } else if(isMobile){

        return (
            <Image src={LaptopImg} alt="laptop" width={200} height={100}   />
        )
        
    } else if(!isTablet && !isMobile){ 
        return (
            <Image src={LaptopImg} alt="laptop" width={1000} height={100}   />
        )
    }

}


  return (


<Box bgGradient="linear(to-b, #000000, #3900B3, #000000)"
        w="100%"
        h="100vh"
        color="white"
        textAlign="center"
        display="flex"
        alignItems="center"
        justifyContent="center" px={10}  >



<ImgRender />


        </Box>

       
  
  )
}

export default LaptopGradientWithImg