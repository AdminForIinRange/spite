import Image from 'next/image'
import React from 'react'
import { Box } from '@chakra-ui/react'
import LaptopImg from '@/img/laptop.png'
import CryptoDashboard from '@/img/cryptoDashbaord.png'
const LaptopGradientWithImg = () => {
  return (


<Box bgGradient="linear(to-b, #000000, #3900B3, #000000)"
        w="100%"
        h="100vh"
        color="white"
        textAlign="center"
        display="flex"
        alignItems="center"
        justifyContent="center">
            
            <Image src={LaptopImg} alt="laptop" width={1300} height={500}   />

                <Image style={{ position: "absolute" }} src={CryptoDashboard} alt="laptop" width={700} height={100}  /> 
         
        </Box>

       
  
  )
}

export default LaptopGradientWithImg