import { HStack, VStack, Text, Button, Spacer } from '@chakra-ui/react'
import React from 'react'

import { HiArrowLongRight } from "react-icons/hi2";

const HeroHeader = () => {
  return (
    <>

  <VStack justify={"center"} h={"100%"} w={"100%"} align={"center"} p={3}  px={12}  >
    <VStack justify={"left"} h={"100%"} w={"100%"} align={"left"}  >
      <Text fontSize={["27px", "20px", "50px", "60px", "95px"]} color={"white"} fontWeight={"bold"} w={"70%"}> 

        
      Obliterate Limits, Your Cryptocurrency Catalyst!
      </Text>
      <Text fontSize={["20px", "20px", "20px", "20px", "26px"]} color={"white"}  w={"40%"}> 

        
      Empowering Your Cryptocurrency Journey: Spite, Where Limits Fade and Opportunities Rise
      </Text>

      <Button w={"200px"} p={2} px={5} mt={5} >
        
        Get Started <Spacer />
        <HiArrowLongRight fontSize={"55px"} />
      </Button>
      
    </VStack>


  </VStack>
    
    </>
  )
}

export default HeroHeader