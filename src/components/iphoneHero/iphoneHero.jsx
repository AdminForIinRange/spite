import React from "react";
import { Box, HStack, VStack, Text, Button, Spacer } from "@chakra-ui/react";

import iphoneCryptoDashboardHero from "@/img/iphoneCryptoDashboardHero.png";
import Image from "next/image";
import { HiArrowLongRight } from "react-icons/hi2";
const IphoneHero = () => {
  return (
    <>
      <HStack
        mt={["80px", "100px", "200px", "200px", "200px"]}
        justify={"center"}
        h={"100%"}
        w={"100%"}
        align={"center"}
      >
        <HStack justify={"center"} h={"100%"} w={"100%"} align={"start"} mr={"-100px"}>
          <Image
            style={{ filter: "drop-shadow(0 0 200px white)" }}
            src={iphoneCryptoDashboardHero}
            alt="iphone"
            width={800}
            height={100}
          />
        </HStack>

        <VStack justify={"center"} h={"100%"} w={"100%"} align={"start"}>
          <Text
            fontSize={["55px", "55px", "55px", "25px", "25px"]}
            color={"white"}
            fontWeight={"500"}
            w={["100%", "100%", "100%", "100%", "90%"]}
          ></Text>
          <Text
            fontSize={["55px", "55px", "55px", "55px", "45px"]}
            color={"white"}
            fontWeight={"700"}
            w={["100%", "100%", "100%", "100%", "90%"]}
            fontFamily={"Raleway"}
          >
            Expand your crypto portfolio with Endless Possibilities
          </Text>
          <Text
            fontSize={["23px", "23px", "23px", "23px", "23px"]}
            color={"white"}
            fontWeight={"500"}
            w={["100%", "100%", "80%", "70%", "70%"]}
            fontFamily={"Raleway"}
          >
            A world of possibilities, in every byte, for every user.
          </Text>
          <Button w={"200px"} px={5} mt={5}>
            Get Started <Spacer />
            <HiArrowLongRight fontSize={"55px"} />
          </Button>
        </VStack>
      </HStack>
    </>
  );
};

export default IphoneHero;
