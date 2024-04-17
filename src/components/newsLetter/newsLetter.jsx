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

import { MdUnsubscribe } from "react-icons/md";
const NewsLetter = () => {
  return (
    <>
      <VStack
        justify={"center"}
        h={"100%"}
        w={"100%"}
        align={"center"}
        mt={["80px", "100px", "200px", "200px", "200px"]}
        gap={5}
        px={["3", "3", "3", "3", "3"]}
      >
        <Text
          textAlign={"center"}
          fontSize={["12px", "16px", "20px", "20px", "26px"]}
          color={"white"}
          fontWeight={"bold"}
        >
          Subscribe To Our Newsletter
        </Text>
        <Text
          textAlign={"center"}
          fontSize={["40px", "40px", "60px", "80px", "80px"]}
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
            boxShadow={"0 0 10px 1px #450DC0"}
            transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
            _hover={{
              transform: "scale(1.03)",
              boxShadow: "0 0 150px 1px #450DC0",
            }}
            w={["90%", "80%", "70%", "70%", "50%"]}
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
                colorScheme="purple"
                fontSize={"100%"}
                size={["xs", "sm", "md", "md", "md"]}
              >
                <MdUnsubscribe />
              </Button>
            </InputRightAddon>
          </InputGroup>
        </VStack>
      </VStack>
    </>
  );
};

export default NewsLetter;
