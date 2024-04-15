import { Box, HStack } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <Box bgColor={"black"} w={"100%"} p={2}>
        <HStack justify={"center"} px={10} w={"100%"}>
        
        
        <HStack justify={"space-between"} px={10} w={"40%"} >
            <Box color={"white"} >
                Home
            </Box>
            <Box color={"white"} >
                    Roadmap
            </Box><Box color={"white"} >
                Home
            </Box><Box color={"white"} >
                Home
            </Box>
        </HStack>
        </HStack>

    </Box>
  )
}

export default Navbar