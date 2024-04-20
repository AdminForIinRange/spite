"use client";

import { Box, HStack, VStack, Text } from "@chakra-ui/react";
import React from "react";

import FlatIphone from "@/img/FlatIphone.png";

import { IoIosSpeedometer } from "react-icons/io";
import { MdOutlineShowChart } from "react-icons/md";
import { FaShieldAlt } from "react-icons/fa";
import Image from "next/image";
import { GoLaw } from "react-icons/go";
import { HiArrowLongRight } from "react-icons/hi2";

import leftleaneum2 from "@/img/leftleaneum2.png";
import leftleanIphone from "@/img/leftleanIphone.png";
import { TbCashBanknoteOff } from "react-icons/tb";
import { FaPeopleGroup } from "react-icons/fa6";
const ServiceBox = () => {
  return (
    <Box
      h={"100%"}
      w={"100%"}
      px={[5, 2, 10, 10, 20]}
      mt={["80px", "100px", "200px", "200px", "200px"]}
    >
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
          <Box
            transition={"all 0.3s ease"}
            cursor={"pointer"}
            _hover={{
              width: "150%",
              backgroundPosition: "top",
              boxShadow: " 0 0px 100px 0 gray",
            }}
            border={"1px solid white"}
            w={"100%"}
            h={["100px", "250px", "350px", "350px", "350px"]}
            bg={"transparent"}
            rounded={"xl"}
            p={5}
            bgRepeat={"no-repeat"}
            bgPosition={"right"}
            bgSize={"100%"}
            bgImage={`url(${leftleaneum2.src})`}
          >
            <Text
              color={"white"}
              fontSize={["22px", "16px", "30px", "46px", "46px"]}
            >
              <GoLaw />
            </Text>
            <Text
              color={"white"}
              fontSize={["22px", "16px", "20px", "46px", "46px"]}
              fontWeight={"700"}
            >
              Leverage
            </Text>

            <HStack
              justify={"end"}
              mt={["-80px", "125px", "205px", "135px", "135px"]}
            >
              <HiArrowLongRight fontSize={"46px"} color="white" />
            </HStack>
          </Box>
          <Box
            cursor={"pointer"}
            transition={"all 0.3s ease"}
            _hover={{
              width: "150%",
              backgroundPosition: "top",
              boxShadow: " 0 0px 100px 0 gray",
            }}
            border={"1px solid white"}
            w={"100%"}
            h={["100px", "250px", "350px", "350px", "350px"]}
            rounded={"xl"}
            p={5}
            bg={"transparent"}
            bgRepeat={"no-repeat"}
            bgPosition={"right"}
            bgSize={"80%"}
            bgImage={`url(${FlatIphone.src})`}
          >
            {" "}
            <Text
              color={"white"}
              fontSize={["22px", "16px", "20px", "46px", "46px"]}
            >
              <TbCashBanknoteOff />
            </Text>
            <Text
              color={"white"}
              fontSize={["22px", "16px", "20px", "46px", "46px"]}
              fontWeight={"700"}
            >
              No Fees
            </Text>
            <HStack
              justify={"end"}
              mt={["-80px", "125px", "205px", "135px", "135px"]}
            >
              <HiArrowLongRight fontSize={"46px"} color="white" />
            </HStack>
          </Box>
          <Box
            cursor={"pointer"}
            transition={"all 0.3s ease"}
            _hover={{
              width: "150%",
              backgroundPosition: "top",
              boxShadow: " 0 0px 100px 0 gray",
            }}
            border={"1px solid white"}
            w={"100%"}
            h={["100px", "250px", "350px", "350px", "350px"]}
            bg={"transparent"}
            rounded={"xl"}
            p={5}
            bgRepeat={"no-repeat"}
            bgPosition={"bottom"}
            bgSize={"100%"}
            bgImage={`url(${leftleanIphone.src})`}
          >
            <Text
              color={"white"}
              fontSize={["22px", "16px", "20px", "46px", "46px"]}
            >
              <FaPeopleGroup />
            </Text>
            <Text
              color={"white"}
              fontSize={["22px", "16px", "20px", "46px", "46px"]}
              fontWeight={"700"}
            >
              Community
            </Text>
            <HStack
              justify={"end"}
              mt={["-80px", "125px", "205px", "135px", "135px"]}
            >
              <HiArrowLongRight fontSize={"46px"} color="white" />
            </HStack>
          </Box>
        </HStack>
      </VStack>
    </Box>
  );
};

export default ServiceBox;
