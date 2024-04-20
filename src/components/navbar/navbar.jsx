"use client"

import { Box, Button, HStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <Box  w={"100%"} h={"100%"}    >
      <HStack justify={"center"} w={"100%"}  >
        <HStack justify={"space-between"} w={["90%", "80%", "90%", "70%",  "50%"]}  bg={"black"} rounded={"xl"} px={["3", "3", "10", "20", "20"]} >
          <Link href={"#Home"}> 
          <Button variant={"none"} color={"white"}  fontSize={["10px", "11px", "14px", "14px", "14px"]}>
            Home
          </Button>
          </Link> 
          <Link href={"#Features"}> 
          <Button variant={"none"} color={"white"}  fontSize={["10px", "11px", "14px", "14px", "14px"]}>
          Features
          </Button>
          </Link>     <Link href={"#Roadmap"}> 
          <Button variant={"none"} color={"white"}  fontSize={["10px", "11px", "14px", "14px", "14px"]}>
          Roadmap
          </Button>
          </Link>     <Link href={"#Contact"}> 
          <Button variant={"none"} color={"white"} fontSize={["10px", "11px", "14px", "14px", "14px"]} >
          Contact
          </Button>
          </Link> 
        </HStack>
      </HStack>
    </Box>
  );
};

export default Navbar;
