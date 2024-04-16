import { HStack, VStack, Text } from "@chakra-ui/react";
import React from "react";

const PerformanceText = () => {
  return (
    <>
      <HStack
        justify={"space-around"}
        h={"100%"}
        w={"100%"}
        align={"center"}
        p={3}
       px={12}
      
        mt={["50px", "50px", "100px", "150px", "150px"]}
      >
        <VStack justify={"center"} align={"center"}  >
          <Text textShadow={"1px 1px 50px blue"}
            textAlign={"center"}
                  fontSize={["12px", "12px", "16px", "16px", "20px"]}
            color={"white"}
            fontWeight={"light"}
            w={"100%"}
          >
            Users Count
          </Text>
          <Text
            fontWeight={"bold"}
             fontSize={["25px", "25px", "45px", "55px", "65px"]}
            color={"white"}
            mt={"10px"}
          >
            0.9M
          </Text>
        </VStack>
        <VStack justify={"center"} align={"center"} >
          <Text
            textAlign={"center"}
                  fontSize={["12px", "12px", "16px", "16px", "20px"]}
            color={"white"}
            fontWeight={"light"}
            w={"100%"}
            
          >
            Total Transaction
          </Text>
          <Text
            fontWeight={"bold"}
            fontSize={["25px", "25px", "45px", "55px", "65px"]}
            color={"white"}
            mt={"10px"}
          >
            112M
          </Text>
        </VStack>
        <VStack justify={"center"} align={"center"} >
          <Text
            textAlign={"center"}
                  fontSize={["12px", "12px", "16px", "16px", "20px"]}
            color={"white"}
            fontWeight={"light"}
            w={"100%"}
          >
            Server Speed
          </Text>
          <Text
            fontWeight={"bold"}
              fontSize={["25px", "25px", "45px", "55px", "65px"]}
            color={"white"}
            mt={"10px"}
          >
          44MS
          </Text>
        </VStack>
        <VStack justify={"center"} align={"center"} >
          <Text
            textAlign={"center"}
            fontWeight={"light"}
            fontSize={["12px", "12px", "16px", "16px", "20px"]}
            color={"white"}
            w={"100%"}
          >
           Asset Pool
          </Text>
          <Text
            fontWeight={"bold"}
             fontSize={["25px", "25px", "45px", "55px", "65px"]}
            color={"white"}
            mt={"10px"}
          >
            134M
          </Text>
        </VStack>
      </HStack>
    </>
  );
};

export default PerformanceText;
