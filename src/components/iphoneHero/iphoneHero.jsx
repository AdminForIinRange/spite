"use client";

import React from "react";
import {
  Box,
  HStack,
  VStack,
  Text,
  Button,
  Spacer,
  useMediaQuery,
} from "@chakra-ui/react";

import iphoneCryptoDashboardHero from "@/img/iphoneCryptoDashboardHero.png";
import IphoneDownload from "@/img/IphoneDownload.jpg";
import googleDownload from "@/img/googleDownload.jpg";

import Image from "next/image";
import { HiArrowLongRight } from "react-icons/hi2";

const IphoneHero = () => {
  const [isTablet] = useMediaQuery("(max-width: 1024px)");
  return (
    <>
      <HStack
        px={["6", "6", "5", "5", "5"]}
        mt={["80px", "100px", "200px", "200px", "200px"]}
        justify={"center"}
        h={"100%"}
        w={"100%"}
        align={"center"}
      >
        <VStack
          justify={"center"}
          h={"100%"}
          w={"100%"}
          align={"center"}
          mr={["0", "0", "0", "0", "-100px"]}
        >
          <Image
            style={{ filter: "drop-shadow(0 0 200px white)" }}
            src={iphoneCryptoDashboardHero}
            alt="iphone"
            width={800}
            height={100}
          />
        </VStack>

        {!isTablet && (
          <VStack justify={"center"} h={"100%"} w={"100%"} align={"start"}>
            <Text
              fontSize={["16px", "26px", "36px", "46px", "46px"]}
              color={"white"}
              fontWeight={"700"}
              w={["100%", "100%", "100%", "90%", "80%"]}
              fontFamily={"Raleway"}
            >
              Light in the Dark, in the complex Crypto world.
            </Text>
            <Text
              fontSize={["12px", "12px", "16px", "23px", "23px"]}
              color={"white"}
              fontWeight={"500"}
              w={["100%", "100%", "80%", "70%", "70%"]}
              fontFamily={"Raleway"}
            >
              A world of possibilities, in every byte, for every user.
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
        )}
      </HStack>

      {isTablet && (
        <HStack justify={"center"} h={"100%"} w={"100%"}>
          <VStack justify={"center"} h={"100%"} w={"100%"} align={"center"}>
            <Text
              fontSize={["26px", "26px", "36px", "46px", "46px"]}
              color={"white"}
              fontWeight={"700"}
              w={["100%", "100%", "100%", "100%", "90%"]}
              fontFamily={"Raleway"}
              textAlign={"center"}
            >
              Light in the Dark
            </Text>
            <Text
              fontSize={["12px", "12px", "23px", "23px", "23px"]}
              color={"white"}
              fontWeight={"500"}
              w={["100%", "100%", "80%", "70%", "70%"]}
              fontFamily={"Raleway"}
              textAlign={"center"}
            >
              A world of possibilities, in every byte, for every user.
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
        </HStack>
      )}
    </>
  );
};

export default IphoneHero;
