import React from "react";
import { Box, Button, HStack, VStack } from "@chakra-ui/react";
const LandingPage = () => {
  return (
    <>
      <HStack>
        <Box w={"100%"} h={"100%"} mt={"20px"}>
          <HStack justify={"center"} w={"100%"}>
            <HStack
              justify={"space-between"}
              w={["90%", "80%", "90%", "70%", "50%"]}
              rounded={"xl"}
              px={["3", "3", "10", "20", "20"]}
            >
              <Button
                variant={"none"}
                color={"black"}
                fontSize={["10px", "11px", "14px", "14px", "14px"]}
              >
                Home
              </Button>

              <Button
                variant={"none"}
                color={"black"}
                fontSize={["10px", "11px", "14px", "14px", "14px"]}
              >
                Features
              </Button>

              <Button
                variant={"none"}
                color={"black"}
                fontSize={["10px", "11px", "14px", "14px", "14px"]}
              >
                Roadmap
              </Button>

              <Button
                variant={"none"}
                color={"black"}
                fontSize={["10px", "11px", "14px", "14px", "14px"]}
              >
                Contact
              </Button>
            </HStack>
          </HStack>
        </Box>
      </HStack>
    </>
  );
};

export default LandingPage;
