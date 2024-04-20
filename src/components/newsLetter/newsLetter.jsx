"use client";

import {
  Box,
  Button,
  HStack,
  VStack,
  Text,
  Input,
  InputRightAddon,
  InputGroup,
} from "@chakra-ui/react";
import { HiArrowLongRight } from "react-icons/hi2";
import { MdUnsubscribe } from "react-icons/md";
const NewsLetter = () => {
  return (
    <>
      <VStack
        justify={"center"}
        h={"100%"}
        w={"100%"}
        align={"center"}
        mt={["100px", "200px", "300px", "300px", "300px"]}
        gap={5}
        px={["3", "3", "3", "3", "3"]}
      >
        <Text
          textAlign={"center"}
          fontSize={["12px", "16px", "20px", "20px", "26px"]}
          color={"white"}
          fontWeight={"100"}
        >
          Subscribe To Our Newsletter
        </Text>
        <Text
          textAlign={"center"}
          fontSize={["50px", "50px", "70px", "90px", "100px"]}
          color={"white"}
          fontWeight={"bold"}
        >
          Newsletter
        </Text>
        <Text
          textAlign={"center"}
          fontSize={["12px", "16px", "20px", "20px", "20px"]}
          color={"white"}
          w={["90%", "80%", "70%", "70%", "50%"]}
          fontWeight={"100"}
        >
          Subscribe to our newsletter, so you can stay up to date with
          everything Spite — from the latest news and updates from our team, to
          success stories from our users, and exclusive behind-the-scenes
          content.
        </Text>
        <VStack
          w={"100%"}
          className="animate__animated animate__fadeInUp "
          align={"center"}
          justify={"center"}
          mt={"20px"}
        
        >
          <InputGroup
            boxShadow={"0 0 10px 1px black"}
            transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
            _hover={{
              transform: "scale(1.03)",
              boxShadow: "0 0 150px 1px black",
            }}
            w={["80%", "70%", "60%", "50%", "30%"]}
            h={["30px", "40px", "50px", "50px", "50px"]}
            variant="filled"
            borderRadius={"20px"}
            bgColor={"#F5F5F5"}
          >
            <Input
              borderWidth={"0px"}
              h={"100%"}
              fontSize={["12px", "16px", "18px", "18px", "18px"]}
              placeholder="bhattaraianjesh123@gmail.com"
            />
            <InputRightAddon h={"100%"}>
              <Button
                colorScheme="gray"
                fontSize={"100%"}
                size={["xs", "sm", "md", "md", "md"]}
              >
                <MdUnsubscribe />
              </Button>
            </InputRightAddon>
          </InputGroup>
        </VStack>

        <HStack
          mt={["40px", "40px", "80px", "80px", "80px"]}
          align={"center"}
          justify={"center"}
          h={"100%"}
          w={"100%"}
          gap={["10px", "10px", "20px", "20px", "30px"]}
        
          wrap={["wrap", "wrap", "wrap", "wrap", "wrap"]}
        >
          <Box cursor={"pointer"}
                transition="all, 0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.03)",
                  boxShadow: "0 5px 25px gray",
                }}
            w={["250px", "250px", "250px", "350px", "350px"]}
            h={["250px", "250px", "250px", "350px", "350px"]}
            p={4}
            rounded={"xl"}
            border={"0.8px solid white"}
          >
            <VStack justify={"start"} h={"100%"} w={"100%"} align={"start"}>
              <Text
                fontSize={["12px", "16px", "16px", "20px", "25px"]}
                fontWeight={"500"}
                color={"white"}
              >
                New Crypto Mining Chip
              </Text>
              <Text
                fontSize={["12px", "16px", "16px", "16px", "16px"]}
                mt={"-5PX"}
                fontWeight={"300"}
                color={"white"}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </Text>

              <Box
                h={"100%"}
                w={"100%"}
                mt={"10px"}
                bgPos={"center"}
                bgSize={"cover"}
                rounded={"xl"}
                bgImage={
                  "https://source.unsplash.com/tilt-shift-photography-of-green-computer-motherboard-bN5XdU-bap4"
                }
              > 
                <HStack transition="all, 0.3s ease-in-out"   _hover={{
                marginLeft: "0px",
                }} w={"100%"} h={"100%"} justify={"end"} align={"end"} marginLeft={"-10px"}  fontSize={["30px", "30px", "30px", "46px", "46px"]}  >
                <HiArrowLongRight  color="white"  /> </HStack> </Box>
            </VStack>
          </Box>
          <Box cursor={"pointer"}
                transition="all, 0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.03)",
                  boxShadow: "0 5px 25px gray",
                }}
                w={["250px", "250px", "250px", "350px", "350px"]}
                h={["250px", "250px", "250px", "350px", "350px"]}
                p={4}
            rounded={"xl"}
            border={"0.8px solid white"}
          >
            <VStack justify={"start"} h={"100%"} w={"100%"} align={"start"}>
              <Text
                fontSize={["12px", "16px", "16px", "20px", "25px"]}
                fontWeight={"500"}
                color={"white"}
              >
               BTC Price Prediction
              </Text>
              <Text
                fontSize={["12px", "16px", "16px", "16px", "16px"]}
                mt={"-5PX"}
                fontWeight={"300"}
                color={"white"}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </Text>

              <Box
                h={"100%"}
                w={"100%"}
                mt={"10px"}
                bgPos={"center"}
                bgSize={"cover"}
                rounded={"xl"}
                bgImage={
                  "https://source.unsplash.com/a-close-up-of-a-computer-screen-with-a-chart-on-it-JpflvzEl5cg"
                }
              > 
                <HStack transition="all, 0.3s ease-in-out"   _hover={{
                marginLeft: "0px",
                }} w={"100%"} h={"100%"} justify={"end"} align={"end"} marginLeft={"-10px"}   fontSize={["30px", "30px", "30px", "46px", "46px"]}>
                <HiArrowLongRight  color="white"  /> </HStack> </Box>
            </VStack>
          </Box>
          <Box cursor={"pointer"}
                transition="all, 0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.03)",
                  boxShadow: "0 5px 25px gray",
                }}
                w={["250px", "250px", "250px", "350px", "350px"]}
                h={["250px", "250px", "250px", "350px", "350px"]}
                p={4}
            rounded={"xl"}
            border={"0.8px solid white"}
          >
            <VStack justify={"start"} h={"100%"} w={"100%"} align={"start"}>
              <Text
                fontSize={["12px", "16px", "16px", "20px", "25px"]}
                fontWeight={"500"}
                color={"white"}
              >
                Best Crypto's for 2025
              </Text>
              <Text
                fontSize={["12px", "16px", "16px", "16px", "16px"]}
                mt={"-5PX"}
                fontWeight={"300"}
                color={"white"}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </Text>

              <Box
                h={"100%"}
                w={"100%"}
                mt={"10px"}
                bgPos={"center"}
                bgSize={"cover"}
                rounded={"xl"}
                bgImage={
                  "https://source.unsplash.com/person-holding-black-iphone-5-_EoTy8Wkf9s"
                }
              > 
                <HStack transition="all, 0.3s ease-in-out"   _hover={{
                marginLeft: "0px",
                }} w={"100%"} h={"100%"} justify={"end"} align={"end"} marginLeft={"-10px"}   fontSize={["30px", "30px", "30px", "46px", "46px"]}>
                <HiArrowLongRight  color="white"  /> </HStack> </Box>
            </VStack>
          </Box>
          
        </HStack>




      </VStack>
    </>
  );
};

export default NewsLetter;
