

import DisplayBox from "@/components/displayBox/displayBox";
import HeroHeader from "@/components/heroHeader/heroHeader";
import LaptopGradientWithImg from "@/components/laptopImg/laptopImg";
import PerformanceText from "@/components/performanceText/performanceText";
import { Box } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <>

    <Box h={"100%"} w={"100%"} bgColor={"black"}       bgPosition={"right"}
            bgSize={"100%"} >


      <Box id="Home" bgColor={"black"} w={"100%"}   >
        <HeroHeader />
      </Box>

      <Box
        bgGradient="linear(to-b, #000000, #3900B3, #000000)"
        w="100%"
        h="100%"
      >
        <LaptopGradientWithImg />
      </Box>

      <Box bgColor={"black"} w={"100%"} >
        <PerformanceText /> {" "}
      </Box>
      
      <Box bgColor={"black"}  w={"100%"}>
       <DisplayBox />
      </Box>
  
      </Box>
    </>
  );
};

export default Home;
