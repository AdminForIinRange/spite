"use client";

import { HStack, VStack, Text, useInterval } from "@chakra-ui/react";
import React, { useState } from "react";

const PerformanceText = () => {
  const [speed, setSpeed] = useState(44);
  const [color, setColor] = useState("#F0FFF4");
  useInterval(
    () => {
      const newSpeed = Math.floor(Math.random() * (70 - 20 + 1) + 20);
      setSpeed(newSpeed);
      if (newSpeed > speed) {
        setColor("#F0FFF4");
      } else {
        setColor("#FFF5F5");
      }
    },
    // every 0.5 sec
    250
  );

  return (
    <>
      <HStack
        justify={"space-around"}
        h={"100%"}
        w={"100%"}
        align={"center"}
        px={["3", "3", "10", "20", "20"]}
        mt={["50px", "50px", "100px", "150px", "150px"]}
      >
        <VStack justify={"center"} align={"center"}>
          <Text
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
            fontSize={["25px", "28px", "45px", "55px", "65px"]}
            color={"white"}
            mt={"10px"}
          >
            0.9M
          </Text>
        </VStack>
        <VStack justify={"center"} align={"center"}>
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
            fontSize={["25px", "28px", "45px", "55px", "65px"]}
            color={"white"}
            mt={"10px"}
          >
            112M
          </Text>
        </VStack>
        <VStack justify={"center"} align={"center"}>
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
            fontSize={["25px", "28px", "45px", "55px", "65px"]}
            color={color}
            mt={"10px"}
            transition={"all 0.5s"}
          >
            {speed}
            MS
          </Text>
        </VStack>
        <VStack justify={"center"} align={"center"}>
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
            fontSize={["25px", "28px", "45px", "55px", "65px"]}
            color={"white"}
            mt={"10px"}
          >
            13<span>2</span>M
          </Text>
        </VStack>
      </HStack>
    </>
  );
};

export default PerformanceText;
