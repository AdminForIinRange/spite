"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Box, HStack, VStack, useMediaQuery, Text } from "@chakra-ui/react";
import LaptopImg from "@/img/LaptopCryptoDash.png";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoVercel } from "react-icons/io5";
import { TbBrandFramerMotion } from "react-icons/tb";
import {
  SiGatsby,
  SiTailwindcss,
  SiWebpack,
  SiBabel,
  SiJest,
  SiPrettier,
  SiGit,
  SiVisualstudio,
  SiNpm,
  SiGitlab,
} from "react-icons/si";
const LaptopGradientWithImg = () => {
  const [isTablet] = useMediaQuery("(max-width: 1024px)");
  const [isMobile] = useMediaQuery("(max-width: 736px)");
  const [isPhone] = useMediaQuery("(max-width: 480px)");
  const [isVerySmall] = useMediaQuery("(max-width: 360px)");

  const ImgRender = () => {
    if (isTablet) {
      return <Image src={LaptopImg} alt="laptop" width={700} height={100} />;
    } else if (isMobile) {
      return <Image src={LaptopImg} alt="laptop" width={200} height={100} />;
    } else if (!isTablet && !isMobile) {
      return <Image src={LaptopImg} alt="laptop" width={1200} height={100} />;
    }
  };

  return (
    <>
      <VStack
       
        color="white"
        textAlign="center"
        display="flex"
        alignItems="center"
        justifyContent="center"
        px={10}
      >
        <ImgRender />
        <VStack justify={"center"} gap={2} align={"center"} >
          <HStack justify={"center"} align={"center"}></HStack>
          <HStack
            justify={"center"}
            gap={["5", "6", "10", "10", "16"]}
            align={"center"}
            opacity={0.5}
          
        fontSize={["15px", "20px", "30px", "30px", "45px"]}
          >
            <FaReact />
            <TbBrandNextjs  />
            <IoLogoVercel  />
            <TbBrandFramerMotion  />

            <SiTailwindcss  />

            <SiJest  />
            <SiPrettier  />
            <SiGit  />
            <SiVisualstudio  />
          </HStack>
        </VStack>
      </VStack>
    </>
  );
};

export default LaptopGradientWithImg;
