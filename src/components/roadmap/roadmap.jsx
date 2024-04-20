import React from "react";
import { Box, HStack, VStack, Text, Button, Spacer } from "@chakra-ui/react";

const Roadmap = () => {
  return (
    <>
      <VStack
        w={"100%"}
        h={"100%"}
        mt={["80px", "100px", "200px", "200px", "200px"]}
        justify={"center"}
        align={"center"}
        transition={"all 0.3s ease"}
      >
        <HStack>
          <HStack w={"100%"} h={"100%"} justify={"center"} align={"start"}>
            <VStack>
              <Box
                w={["150px", "200px", "300px", "450px", "450px"]}
                h={["200px", "200px", "200px", "200px", "200px"]}
                bg={"trabsparent"}
               borderRadius={["5px", "5px", "10px", "15px", "15px"]}
                p={["10px", "10px", "20px", "20px", "20px"]}
              ></Box>

              <Box
              transition={"all 0.3s ease"}
              _hover={{
                marginRight: "20px",
              }}
                w={["150px", "200px", "300px", "450px", "450px"]}
                h={["200px", "200px", "200px", "200px", "200px"]}
                bg={"transparent"}
               borderRadius={["5px", "5px", "10px", "15px", "15px"]}
                p={["10px", "10px", "20px", "20px", "20px"]}
                border={"1px solid white"}
              >
                <Text
                  textAlign={"left"}
                  fontSize={"20px"}
                  color={"white"}
                  fontWeight={"bold"}
                >
                  Q2 2023
                </Text>
                <Text
                  textAlign={"left"}
                  fontSize={["12px", "13px", "14px", "15px", "16px"]}
                  color={"white"}
                  fontWeight={"300"}
                   py={["5px", "5px", "5px", "10px", "20px"]}
                >
                  Launch platform, focus on user acquisition, and gather feedback for iterative improvements.
                </Text>
              </Box>
              <Box
                w={["150px", "200px", "300px", "450px", "450px"]}
                h={["200px", "200px", "200px", "200px", "200px"]}
                bg={"trabsparent"}
               borderRadius={["5px", "5px", "10px", "15px", "15px"]}
              >
                {" "}
              </Box>
              <Box
                transition={"all 0.3s ease"}
                _hover={{
                  marginRight: "20px",
                }}
                w={["150px", "200px", "300px", "450px", "450px"]}
                h={["200px", "200px", "200px", "200px", "200px"]}
                bg={"transparent"}
               borderRadius={["5px", "5px", "10px", "15px", "15px"]}
                p={["10px", "10px", "20px", "20px", "20px"]}
                border={"1px solid white"}
              >
                <Text
                  textAlign={"left"}
                  fontSize={"20px"}
                  color={"white"}
                  fontWeight={"bold"}
                >
                  Q4 2023
                </Text>{" "}
                <Text
                  textAlign={"left"}
                  fontSize={["12px", "13px", "14px", "15px", "16px"]}
                  color={"white"}
                  fontWeight={"300"}
                   py={["5px", "5px", "5px", "10px", "20px"]}
                >
                   Introduce new features, explore collaborations, and prepare for scaling in the following year.
                </Text>
              </Box>
              <Box
                w={["150px", "200px", "300px", "450px", "450px"]}
                h={["200px", "200px", "200px", "200px", "200px"]}
                bg={"trabsparent"}
               borderRadius={["5px", "5px", "10px", "15px", "15px"]}
              ></Box>
              <Box
                transition={"all 0.3s ease"}
                _hover={{
                  marginRight: "20px",
                }}
                w={["150px", "200px", "300px", "450px", "450px"]}
                h={["200px", "200px", "200px", "200px", "200px"]}
                bg={"transparent"}
               borderRadius={["5px", "5px", "10px", "15px", "15px"]}
                p={["10px", "10px", "20px", "20px", "20px"]}
                border={"1px solid white"}
              >
                {" "}
                <Text
                  textAlign={"left"}
                  fontSize={"20px"}
                  color={"white"}
                  fontWeight={"bold"}
                >
                  Q2 2024
                </Text>{" "}
                <Text
                  textAlign={"left"}
                  fontSize={["12px", "13px", "14px", "15px", "16px"]}
                  color={"white"}
                  fontWeight={"300"}
                   py={["5px", "5px", "5px", "10px", "20px"]}
                >
                 Enhance customer support, integrate additional cryptocurrencies, and explore international market opportunities.
                </Text>
              </Box>
              <Box
              
                w={["150px", "200px", "300px", "450px", "450px"]}
                h={["200px", "200px", "200px", "200px", "200px"]}
                bg={"trabsparent"}
               borderRadius={["5px", "5px", "10px", "15px", "15px"]}
              ></Box>
              <Box
                transition={"all 0.3s ease"}
                _hover={{
                  marginRight: "20px",
                }}
                w={["150px", "200px", "300px", "450px", "450px"]}
                h={["200px", "200px", "200px", "200px", "200px"]}
                bg={"transparent"}
               borderRadius={["5px", "5px", "10px", "15px", "15px"]}
                p={["10px", "10px", "20px", "20px", "20px"]}
                border={"1px solid white"}
              >
                {" "}
                <Text
                  textAlign={"left"}
                  fontSize={"20px"}
                  color={"white"}
                  fontWeight={"bold"}
                >
                  Q4 2024
                </Text>{" "}
                <Text
                  textAlign={"left"}
                  fontSize={["12px", "13px", "14px", "15px", "16px"]}
                  color={"white"}
                   py={["5px", "5px", "5px", "10px", "20px"]}
                  fontWeight={"300"}
                >
                   Scale operations, deepen industry partnerships, and innovate with blockchain technology for future growth.
                </Text>
              </Box>
              <Box
                w={["150px", "200px", "300px", "450px", "450px"]}
                h={["200px", "200px", "200px", "200px", "200px"]}
                bg={"trabsparent"}
               borderRadius={["5px", "5px", "10px", "15px", "15px"]}
              ></Box>
            </VStack>
          </HStack>

          <VStack w={"100%"} h={"100%"} justify={"center"} align={"center"}>
            <Box
              w={["10px", "15px", "20px", "25px", "25px"]}
              h={"1700px"}
              bg={"white"}
              borderRadius={"full"}
            ></Box>
          </VStack>
          <HStack w={"100%"} h={"100%"} justify={"center"} align={"start"}>
            <VStack>
              <Box

              transition={"all 0.3s ease"}
              _hover={{
                marginLeft: "20px",
              }}
                w={["150px", "200px", "300px", "450px", "450px"]}
                h={["200px", "200px", "200px", "200px", "200px"]}
                bg={"transparent"}
                borderRadius={["5px", "5px", "10px", "15px", "15px"]}
                p={["10px", "10px", "20px", "20px", "20px"]}
                border={"1px solid white"}
              >
                {" "}
                <Text
                  textAlign={"left"}
                  fontSize={"20px"}
                  color={"white"}
                  fontWeight={"bold"}
                >
                  Q1 2023
                </Text>{" "}
                <Text
                  textAlign={"left"}
                  fontSize={["12px", "13px", "14px", "15px", "16px"]}
                  color={"white"}
                  fontWeight={"300"}
                   py={["5px", "5px", "5px", "10px", "20px"]}
                >
                  Establish foundational infrastructure, onboard initial users,
                  and develop core trading features for the platform's launch.
                </Text>
              </Box>

              <Box
                w={["150px", "200px", "300px", "450px", "450px"]}
                h={["200px", "200px", "200px", "200px", "200px"]}
                bg={"trabsparent"}
               borderRadius={["5px", "5px", "10px", "15px", "15px"]}
              ></Box>
              <Box
                transition={"all 0.3s ease"}
              _hover={{
                marginLeft: "20px",
              }}
                w={["150px", "200px", "300px", "450px", "450px"]}
                h={["200px", "200px", "200px", "200px", "200px"]}
                bg={"transparent"}
               borderRadius={["5px", "5px", "10px", "15px", "15px"]}
                p={["10px", "10px", "20px", "20px", "20px"]}
                border={"1px solid white"}
              >
                {" "}
                <Text
                  textAlign={"left"}
                  fontSize={"20px"}
                  color={"white"}
                  fontWeight={"bold"}
                >
                  Q3 2023
                </Text>{" "}
                <Text
                  textAlign={"left"}
                  fontSize={["12px", "13px", "14px", "15px", "16px"]}
                  color={"white"}
                  fontWeight={"300"}
                  py={["5px", "5px", "5px", "10px", "20px"]}
                >
                   Enhance platform based on user feedback, expand partnerships, and bolster security measures.
                </Text>
              </Box>
              <Box
                w={["150px", "200px", "300px", "450px", "450px"]}
                h={["200px", "200px", "200px", "200px", "200px"]}
                bg={"trabsparent"}
               borderRadius={["5px", "5px", "10px", "15px", "15px"]}
              ></Box>
              <Box
              transition={"all 0.3s ease"}
              _hover={{
                marginLeft: "20px",
              }}
                w={["150px", "200px", "300px", "450px", "450px"]}
                h={["200px", "200px", "200px", "200px", "200px"]}
                bg={"transparent"}
               borderRadius={["5px", "5px", "10px", "15px", "15px"]}
                p={["10px", "10px", "20px", "20px", "20px"]}
                border={"1px solid white"}
              >
                {" "}
                <Text
                  textAlign={"left"}
                  fontSize={"20px"}
                  color={"white"}
                  fontWeight={"bold"}
                >
                  Q1 2024
                </Text>{" "}
                <Text
                  textAlign={"left"}
                  fontSize={["12px", "13px", "14px", "15px", "16px"]}
                  color={"white"}
                  fontWeight={"300"}
                   py={["5px", "5px", "5px", "10px", "20px"]}
                >
                  Expand platform functionality, optimize user experience, and explore monetization strategies.
                </Text>
              </Box>
              <Box
                w={["150px", "200px", "300px", "450px", "450px"]}
                h={["200px", "200px", "200px", "200px", "200px"]}
                bg={"trabsparent"}
               borderRadius={["5px", "5px", "10px", "15px", "15px"]}
              ></Box>
              <Box
              transition={"all 0.3s ease"}
              _hover={{
                marginLeft: "20px",
              }}
                w={["150px", "200px", "300px", "450px", "450px"]}
                h={["200px", "200px", "200px", "200px", "200px"]}
                bg={"transparent"}
               borderRadius={["5px", "5px", "10px", "15px", "15px"]}
                p={["10px", "10px", "20px", "20px", "20px"]}
                border={"1px solid white"}
              >
                {" "}
                <Text
                  textAlign={"left"}
                  fontSize={"20px"}
                  color={"white"}
                  fontWeight={"bold"}
                >
                  Q3 2024
                </Text>
                <Text
                  textAlign={"left"}
                  fontSize={["12px", "13px", "14px", "15px", "16px"]}
                  color={"white"}
                  fontWeight={"300"}
                   py={["5px", "5px", "5px", "10px", "20px"]}
                >
                   Implement advanced trading tools, launch mobile app, and strengthen regulatory compliance measures.
                </Text>
              </Box>
              <Box
                w={["150px", "200px", "300px", "450px", "450px"]}
                h={["200px", "200px", "200px", "200px", "200px"]}
                bg={"trabsparent"}
               borderRadius={["5px", "5px", "10px", "15px", "15px"]}
              >
                {" "}
              </Box>
              <Box
              transition={"all 0.3s ease"}
              _hover={{
                marginLeft: "20px",
              }}
                w={["150px", "200px", "300px", "450px", "450px"]}
                h={["200px", "200px", "200px", "200px", "200px"]}
                bg={"transparent"}
               borderRadius={["5px", "5px", "10px", "15px", "15px"]}
                p={["10px", "10px", "20px", "20px", "20px"]}
                border={"1px solid white"}
              >
                {" "}
                <Text
                  textAlign={"left"}
                  fontSize={"20px"}
                  color={"white"}
                  fontWeight={"bold"}
                >
                  Q1 2025
                </Text>
                <Text
                  textAlign={"left"}
                  fontSize={["12px", "13px", "14px", "15px", "16px"]}
                  color={"white"}
                  fontWeight={"300"}
                   py={["5px", "5px", "5px", "10px", "20px"]}
                >
                  Consolidate market presence, explore DeFi integrations, and invest in research for long-term sustainability.
                </Text>
              </Box>
            </VStack>
          </HStack>
        </HStack>
      </VStack>
    </>
  );
};

export default Roadmap;

<HStack w={"100%"} h={"100%"} juwhite={"center"} align={"center"}>
  <Box w={"450px"} h={"200px"} bg={"white"}borderRadius={["5px", "5px", "10px", "15px", "15px"]}></Box>
</HStack>;
