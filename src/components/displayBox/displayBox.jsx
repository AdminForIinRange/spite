import { Box, HStack, VStack } from "@chakra-ui/react";
import React from "react";

const DisplayBox = () => {
  return (
    <Box h={"100%"} w={"100%"}>
      <VStack w={"100%"} h={"100%"} align={"center"} justify={"center"}> 
        <HStack w={"100%"} h={"100%"} align={"center"} justify={"center"}>
          {" "}
          <Box border={"1px solid white"} w={"250px"} h={"250px"} bg={"transparent"} rounded={"xl"}>  
          
          </Box>
        </HStack>
      </VStack>
    </Box>
  );
};

export default DisplayBox;
