import { Box, HStack, VStack, Text } from "@chakra-ui/react";
import React from "react";

const DisplayBox = () => {
  return (
    <Box h={"100%"} w={"100%"}  px={20} mt={"200px"}>
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
          gap={8}
        >
          {" "}
          <Box
            border={"1px solid white"}
            w={"100%"}
            h={"350px"}
            bg={"transparent"}
            rounded={"xl"}
            p={5}
          ></Box>
          <Box
            border={"1px solid white"}
            w={"50%"}
            h={"250px"}
            bg={"transparent"}
            rounded={"xl"}
            p={5}
          >
            <Text
              fontSize={["30px", "30px", "30px", "30px", "30px"]}
              color={"white"}
              fontWeight={"bold"}
            ></Text>
          </Box>
        </HStack>

        <HStack
          w={"100%"}
          h={"100%"}
          align={"start"}
          justify={"center"}
          gap={8}
        >
          <Box
            border={"1px solid white"}
            w={"50%"}
            h={"250px"}
            bg={"transparent"}
            rounded={"xl"}
            p={5}
          >
            <Text
              fontSize={["30px", "30px", "30px", "30px", "30px"]}
              color={"white"}
              fontWeight={"bold"}
            ></Text>
          </Box>{" "}
          <Box
            border={"1px solid white"}
            w={"100%"}
            h={"350px"}
            bg={"transparent"}
            rounded={"xl"}
            p={5}
          ></Box>
        </HStack>
      </VStack>
    </Box>
  );
};

export default DisplayBox;
