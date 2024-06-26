"use client";

import { HStack, VStack, Text, Button, Spacer } from "@chakra-ui/react";
import React from "react";

import { HiArrowLongRight } from "react-icons/hi2";
import WaveyLine from "@/img/WaveyLine.png";
import Navbar from "@/components/navbar/navbar";
const HeroHeader = () => {
  return (
    <>
      <VStack
        justify={"center"}
        h={"100%"}
        w={"100%"}
        align={"center"}
        p={3}
        px={[5, 7, 10, 12, 12]}
        mb={"100px"}
        bgImage={`url(${WaveyLine.src})`}
        bgRepeat={"no-repeat"}
        bgPosition={"bottom"}
        bgSize={"100%"}
      >
        <Navbar />
        <VStack justify={"left"} h={"100%"} w={"100%"} align={"left"}>
          <Text
            fontSize={["40px", "40px", "60px", "80px", "95px"]}
            color={"white"}
            fontWeight={"bold"}
            w={["100%", "100%", "100%", "100%", "90%"]}
          >
            Obliterate Limits, Your Cryptocurrency Catalyst!
          </Text>
          <Text
            fontSize={["12px", "16px", "20px", "20px", "26px"]}
            color={"white"}
            w={["90%", "90%", "90%", "50%", "40%"]}
          >
            Empowering Your Cryptocurrency Journey: Spite, Where Limits Fade and
            Opportunities Rise
          </Text>

          <Button
            h={["30px", "30px", "30px", "40px", "40px"]}
            w={["120px", "120px", "140px", "200px", "200px"]}
            px={5}
            mt={5}
            fontSize={["10px", "10px", "12px", "16px", "16px"]}
          >
            Get Started <Spacer />
            <Text fontSize={["25px", "25px", "25px", "55px", "55px"]}>
              <HiArrowLongRight />
            </Text>
          </Button>
        </VStack>
      </VStack>
    </>
  );
};

export default HeroHeader;
