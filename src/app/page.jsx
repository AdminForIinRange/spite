import DisplayBox from "@/components/displayBox/displayBox";
import Faq from "@/components/faq/faq";
import Footer from "@/components/footer/footer";
import HeroHeader from "@/components/heroHeader/heroHeader";
import IphoneHero from "@/components/iphoneHero/iphoneHero";
import LaptopGradientWithImg from "@/components/laptopImg/laptopImg";
import NewsLetter from "@/components/newsLetter/newsLetter";
import PerformanceText from "@/components/performanceText/performanceText";
import Roadmap from "@/components/roadmap/roadmap";
import ServiceBox from "@/components/serviceBox/serviceBox";
import { Box } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <>
      <Box
        h={"100%"}
        w={"100%"}
        bgColor={"black"}
        bgPosition={"right"}
        bgSize={"100%"}
      >
        <Box id="Home" bgColor={"black"} w={"100%"} fontFamily={"Raleway"}>
          <HeroHeader />
        </Box>

        <Box
          bgGradient="linear(to-b, #000000, #3900B3, #000000)"
          w="100%"
          h="100%"
        >
          <LaptopGradientWithImg />
        </Box>

        <Box bgColor={"black"} w={"100%"}>
          <PerformanceText />{" "}
        </Box>

        <Box id="Features" bgColor={"black"} w={"100%"} fontFamily={"Raleway"}>
          <DisplayBox />
        </Box>

        <Box fontFamily={"Raleway"} w="100%" h="100%">
          <IphoneHero />
        </Box>

        <Box fontFamily={"Raleway"} w="100%" h="100%">
          <ServiceBox />
        </Box>
        <Box id="Roadmap" bgColor={"black"} w="100%" h="100%">
          <Roadmap />
        </Box>
        <Box
          id="NewsLetter"
          bgColor={"black"}
          w="100%"
          h="100%"
          fontFamily={"Raleway"}
        >
          <NewsLetter />
        </Box>

        <Box
          id="Contact"
          bgColor={"black"}
          w="100%"
          h="100%"
          fontFamily={"Raleway"}
        >
          <Faq />
        </Box>

        <Box bgColor={"black"} w="100%" h="100%" fontFamily={"Raleway"}>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default Home;
