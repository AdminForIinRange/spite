import HeroHeader from '@/components/heroHeader/heroHeader'
import LaptopGradientWithImg from '@/components/laptopImg/laptopImg'
import { Box } from '@chakra-ui/react'
import React from 'react'

const Home = () => {
  return (
    <>
    
    <Box id='Home' bgColor={"black"} w={"100%"} >

      <HeroHeader />
    </Box>
<LaptopGradientWithImg />
    </>
  )
}

export default Home