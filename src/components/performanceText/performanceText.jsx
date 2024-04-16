import { HStack, VStack, Text } from "@chakra-ui/react";
import React from "react";

const PerformanceText = () => {
  return (
    <>
      <HStack
        justify={"center"}
        h={"100%"}
        w={"100%"}
        align={"center"}
        p={3}
        gap={"250px"}
      >
        <VStack justify={"center"} align={"center"} mt={"250px"} >
          <Text
            textAlign={"center"}
            fontSize={["16px", "16px", "16px", "16px", "20px"]}
            color={"white"}
            fontWeight={"light"}
            w={"100%"}
          >
            Users Count
          </Text>
          <Text
            fontWeight={"bold"}
            fontSize={["65px", "65px", "65px", "65px", "65px"]}
            color={"white"}
            mt={"10px"}
          >
            0.9M
          </Text>
        </VStack>
        <VStack justify={"center"} align={"center"} mt={"250px"}>
          <Text
            textAlign={"center"}
            fontSize={["16px", "16px", "16px", "16px", "20px"]}
            color={"white"}
            fontWeight={"light"}
            w={"100%"}
            
          >
            Total Transaction
          </Text>
          <Text
            fontWeight={"bold"}
            fontSize={["65px", "65px", "65px", "65px", "65px"]}
            color={"white"}
            mt={"10px"}
          >
            112M
          </Text>
        </VStack>
        <VStack justify={"center"} align={"center"} mt={"250px"}>
          <Text
            textAlign={"center"}
            fontSize={["16px", "16px", "16px", "16px", "20px"]}
            color={"white"}
            fontWeight={"light"}
            w={"100%"}
          >
            Server Speed
          </Text>
          <Text
            fontWeight={"bold"}
            fontSize={["65px", "65px", "65px", "65px", "65px"]}
            color={"white"}
            mt={"10px"}
          >
          44MS
          </Text>
        </VStack>
        <VStack justify={"center"} align={"center"} mt={"250px"}>
          <Text
            textAlign={"center"}
            fontWeight={"light"}
            fontSize={["16px", "16px", "16px", "16px", "20px"]}
            color={"white"}
            w={"100%"}
          >
           Asset Pool
          </Text>
          <Text
            fontWeight={"bold"}
            fontSize={["65px", "65px", "65px", "65px", "65px"]}
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
