import React from 'react'
import { Box, HStack, VStack, Text,   Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, } from "@chakra-ui/react";
const Faq = () => {
  return (
    <>
<VStack w={"100%"} mt={["50px", "50px", "100px", "150px", "150px"]} justify={"center"} align={"center"}  color={"white"}>
    <VStack>
        <Text    fontSize={["16px", "26px", "36px", "46px", "46px"]}
            color={"white"}
            fontWeight={"700"}
            w={["100%", "100%", "100%", "100%", "100%"]}
            fontFamily={"Raleway"} >Frequently Asked Questions</Text>
        <Text  fontSize={["12px", "12px", "16px", "23px", "23px"]}
            color={"white"}
            fontWeight={"500"}
            w={["100%", "100%", "100%", "100%", "100%"]}
            fontFamily={"Raleway"}>Everything you need to know in one place</Text>
    </VStack>
    
    <VStack w={["95%", "95%", "95%", "90%", "90%"]}>

    <Accordion defaultIndex={[0]} allowMultiple w={["90%", "90%", "90%", "90%", "90%"]}>
  <AccordionItem>
    <h2>
      <AccordionButton >
        <Box as='span' flex='1' textAlign='left' >
          Section 1 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='left'>
          Section 2 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
    </VStack>
</VStack>

    
    </>
  )
}

export default Faq