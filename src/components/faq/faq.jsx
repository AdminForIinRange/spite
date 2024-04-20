import React from 'react'
import { Box, HStack, VStack, Text,   Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, } from "@chakra-ui/react";
const Faq = () => {
  return (
    <>
<VStack w={"100%"}  mt={["100px", "200px", "200", "250px", "250px"]} justify={"center"} align={"center"}  color={"white"}>
    <VStack justify={"center"} align={"center"} >
        <Text  textAlign={"center"}  fontSize={["16px", "26px", "36px", "46px", "46px"]}
            color={"white"}
            fontWeight={"700"}
            w={["100%", "100%", "100%", "100%", "100%"]}
            fontFamily={"Raleway"} >Frequently Asked Questions</Text>
        <Text  textAlign={"center"}  fontSize={["12px", "12px", "16px", "23px", "23px"]}
            color={"white"}
            fontWeight={"500"}
            w={["100%", "100%", "100%", "100%", "100%"]}
            fontFamily={"Raleway"}>Everything you need to know in one place</Text>
    </VStack>
    
    <VStack w={["95%", "95%", "95%", "90%", "90%"]} mt={["50px", "50px", "70px", "70px", "70px"]} >

    <Accordion defaultIndex={[0]} allowMultiple w={["100%", "95%", "90%", "70%", "70%"]} >
  <AccordionItem p={2} > 
    <h2>
      <AccordionButton >
        <Box as='span' flex='1' textAlign='left'  fontSize={["16px", "16px", "23px", "23px", "23px"]} >
         What is Spite?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}  fontSize={["12px", "12px", "16px", "16px", "16px"]} >
      Spite stands as a pioneering platform at the forefront of the cryptocurrency trading landscape, providing a robust infrastructure tailored specifically for large crypto banks. Its role as an internal broker streamlines the process of buying, selling, and trading cryptocurrencies, offering seamless execution and minimal friction. With a focus on efficiency and security, Spite empowers users to navigate the dynamic crypto market with confidence, leveraging advanced data analytics and AI-driven algorithms to provide actionable insights in real-time.
      
      <br /> <br />  By prioritizing security through state-of-the-art encryption and multi-layered authentication, Spite ensures the safety of users' assets, fostering trust and reliability in its ecosystem.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem p={2} >
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='left'   fontSize={["16px", "16px", "23px", "23px", "23px"]} >
          What is Crypto
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} fontSize={["12px", "12px", "16px", "16px", "16px"]} >
      Cryptocurrency is a type of digital or virtual currency that uses cryptography for security and operates on decentralized networks based on blockchain technology. Unlike traditional currencies issued by governments (fiat currencies), cryptocurrencies are not controlled by any central authority, making them immune to government interference or manipulation.
      
      <br /><br />
      Cryptocurrencies enable secure peer-to-peer transactions without the need for intermediaries like banks. They offer several advantages, including lower transaction fees, faster transactions, enhanced privacy, and accessibility to financial services for unbanked populations.
      
      <br /><br />
      Examples of popular cryptocurrencies include Bitcoin (BTC), Ethereum (ETH), Ripple (XRP), Litecoin (LTC), and many others. Each cryptocurrency has its own unique features, use cases, and community of supporters.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem p={2} >
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='left'   fontSize={["16px", "16px", "23px", "23px", "23px"]} >
          How do I buy cryptocurrencies?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} fontSize={["12px", "12px", "16px", "16px", "16px"]} >
      Buying cryptocurrencies can be done through cryptocurrency exchanges, where you can exchange traditional fiat currency for cryptocurrencies like Bitcoin, Ethereum, etc. The process typically involves creating an account on a cryptocurrency exchange, verifying your identity, depositing funds, and then placing buy orders for the desired cryptocurrencies at the current market price or a specified price level.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem p={2} >
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='left'   fontSize={["16px", "16px", "23px", "23px", "23px"]} >
          How do I store my cryptocurrencies?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} fontSize={["12px", "12px", "16px", "16px", "16px"]} >
      Cryptocurrencies are stored in digital wallets, which can be software-based or hardware-based. Software wallets are typically apps or online services that securely store your cryptocurrency keys and allow you to send and receive cryptocurrencies. Hardware wallets are physical devices that store your keys offline, providing an extra layer of security. It's important to choose a reputable wallet provider and follow best practices for securing your wallet, such as enabling two-factor authentication and keeping your private keys safe.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem p={2} >
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='left'   fontSize={["16px", "16px", "23px", "23px", "23px"]} >
          What is blockchain technology?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} fontSize={["12px", "12px", "16px", "16px", "16px"]} >
      Blockchain is a decentralized, distributed ledger technology that records transactions across multiple computers in a way that is immutable and transparent. Each block in the blockchain contains a cryptographic hash of the previous block, timestamped transaction data, and a unique identifier. Once recorded, the data in any given block cannot be altered without altering all subsequent blocks, which requires the consensus of the network majority. Blockchain technology is the underlying technology behind cryptocurrencies like Bitcoin and Ethereum, but its potential applications extend far beyond digital currencies to areas such as supply chain management, voting systems, and decentralized finance (DeFi).
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem p={2} >
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='left'   fontSize={["16px", "16px", "23px", "23px", "23px"]} >
          What are the risks associated with investing in cryptocurrencies?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} fontSize={["12px", "12px", "16px", "16px", "16px"]} >
      Investing in cryptocurrencies carries various risks, including market volatility, regulatory uncertainty, cybersecurity threats, and the risk of loss due to human error (such as forgetting passwords or sending funds to the wrong address). Additionally, the value of cryptocurrencies can be influenced by factors such as market speculation, technological developments, and macroeconomic trends. It's essential for investors to conduct thorough research, diversify their investment portfolio, and only invest funds they can afford to lose.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem p={2} >
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='left'   fontSize={["16px", "16px", "23px", "23px", "23px"]} >
          How can I protect my cryptocurrency investments?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} fontSize={["12px", "12px", "16px", "16px", "16px"]} >
      To protect your cryptocurrency investments, it's crucial to implement robust security measures, such as using hardware wallets to store your cryptocurrencies offline, enabling two-factor authentication (2FA) on your exchange and wallet accounts, using strong and unique passwords, and regularly updating your software and firmware. Additionally, be cautious of phishing attempts, only use reputable exchanges and wallets, and consider diversifying your investments across different cryptocurrencies and asset classes.
    </AccordionPanel>
  </AccordionItem>
</Accordion>

    </VStack>
</VStack>

    
    </>
  )
}

export default Faq