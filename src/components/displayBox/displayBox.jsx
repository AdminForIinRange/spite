import { Box, HStack, VStack, Text } from "@chakra-ui/react";
import React from "react";

import IphoneCrypto from "@/img/iphonesCrypto.png";
import { IoIosSpeedometer } from "react-icons/io";
import { FaChartLine } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";
import Image from "next/image";
const DisplayBox = () => {
  return (
    <Box h={"100%"} w={"100%"} px={[5, 10, 10, 10, 20]} mt={["80px", "100px", "200px", "200px", "200px"]}>
      <VStack
        w={"100%"}
        h={"100%"}
        align={"center"}
        justify={"center"}
        gap={"100px"}
      >
        <HStack
          w={"100%"}
          h={"100%"}
          align={"start"}
          justify={"center"}
          gap={["10px", "10px", "10px", "20px", "20px"]} 
          flexWrap={["wrap", "nowrap", "nowrap", "nowrap", "nowrap"]}
         
        >
          {" "}
          <Box   transition={"all 0.3s ease"} _hover={{ 

            width: "150%",
           }}
            border={"1px solid white"}
            w={"100%"}
            h={["100px", "250px", "350px", "350px", "350px"]}
            bg={"transparent"}
            rounded={"xl"}
            p={5}>
                <Text color={"white"} fontSize={["22px", "16px", "20px", "30px", "46px"]} fontWeight={"bold"}>
        <IoIosSpeedometer  />
      </Text>
          </Box>
           <Box
           transition={"all 0.3s ease"} _hover={{ 

            width: "150%",
           }}
            border={"1px solid white"}
            w={"100%"}
            h={["100px", "250px", "350px", "350px", "350px"]}
            bg={"transparent"}
            rounded={"xl"}
            p={5}
          >  <Text color={"white"} fontSize={["22px", "16px", "20px", "30px", "46px"]} fontWeight={"bold"} >
    <FaChartLine  />
      </Text></Box>
           <Box
           transition={"all 0.3s ease"} _hover={{ 

            width: "150%",
           }}
            border={"1px solid white"}
            w={"100%"}
            h={["100px", "250px", "350px", "350px", "350px"]}
            bg={"transparent"}
            rounded={"xl"}
            p={5}
          >
           
            <Text color={"white"} fontSize={["22px", "16px", "20px", "30px", "46px"]} fontWeight={"bold"}>
  <FaShieldAlt  />
            </Text>
           
          </Box>
        </HStack>
      </VStack>
    </Box>
  );
};

export default DisplayBox;
