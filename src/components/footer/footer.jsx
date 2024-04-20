"use client";

import { Box, Flex, Link, Text, Stack, Icon } from "@chakra-ui/react";

import { FaGoogle, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      mt={["100px", "200px", "300px", "300px", "300px"]}
      bgColor="black"
      py={2}
      borderRadius={"15px"}
      color={"white"}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-around"
        align="center"
        color={"white"}
      >
        <Stack
          spacing={4}
          textAlign="center"
          mb={{ base: 8, md: 0 }}
          color={"white"}
        >
          <Text fontSize="lg" fontWeight="bold" color={"white"}>
            Company
          </Text>
          <Link href="#" fontSize="sm" color="white">
            About Us
          </Link>
          <Link href="#" fontSize="sm" color="white">
            Contact Us
          </Link>
          <Link href="#" fontSize="sm" color="white">
            Privacy Policy
          </Link>
          <Link href="#" fontSize="sm" color="white">
            Terms of Service
          </Link>
        </Stack>
        <Stack spacing={4} textAlign="center" mb={{ base: 8, md: 0 }}>
          <Text fontSize="lg" fontWeight="bold">
            Get Started
          </Text>
          <Link href="/components" fontSize="sm" color="white">
            Home
          </Link>
          <Link href="/components/card" fontSize="sm" color="white">
            Features
          </Link>
          <Link href="/components/loginForm" fontSize="sm" color="white">
            Roadmap
          </Link>
          <Link href="/" fontSize="sm" color="white">
            Contact
          </Link>
        </Stack>
        <Stack spacing={4} textAlign="center" mb={{ base: 8, md: 0 }}>
          <Text fontSize="lg" fontWeight="bold">
            Connect
          </Text>
          <Flex justify="center">
            <Link
              target="_blank"
              href="https://github.com/AdminForIinRange"
              mr={2}
            >
              <Icon as={FaGithub} boxSize={6} color="white" />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/anjesh-bhattarai/"
              mr={2}
            >
              <Icon as={FaLinkedin} boxSize={6} color="white" />
            </Link>
          </Flex>
        </Stack>
      </Flex>
      <Text mt={8} textAlign="center" fontSize="sm" color="white">
        © 2024 Anjesh Bhattarai
      </Text>
    </Box>
  );
};

export default Footer;
