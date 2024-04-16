"use client"

import { Box, Button, HStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <Box bgColor={"black"} w={"100%"} py={2}>
      <HStack justify={"center"} w={"100%"}>
        <HStack justify={"space-between"} w={"40%"}>
          <Link href={"#Home"}> 
          <Button variant={"none"} color={"white"} >
            Home
          </Button>
          </Link> 
          <Link href={"#Features"}> 
          <Button variant={"none"} color={"white"} >
          Features
          </Button>
          </Link>     <Link href={"#Roadmap"}> 
          <Button variant={"none"} color={"white"} >
          Roadmap
          </Button>
          </Link>     <Link href={"#Contact"}> 
          <Button variant={"none"} color={"white"} >
          Contact
          </Button>
          </Link> 
        </HStack>
      </HStack>
    </Box>
  );
};

export default Navbar;
