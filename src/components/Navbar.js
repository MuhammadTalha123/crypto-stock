import React from 'react'
import { Flex, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'

import ICON from "../img/icon.svg";
import { Button } from '@chakra-ui/button';

const Navbar = () => {
    return (
        <Flex justify="space-around" bg="#F5F6F7" h="68px">
            <Flex>
                <Image
                    width='100px'
                    src={ICON}
                    alt='Icon'
                />
            </Flex>
            <Flex justify="center" align="center">
                <Text mx="15px" fontWeight="500">All Assets</Text>
                <Text mx="15px" fontWeight="500">Stocks</Text>
                <Text mx="15px" fontWeight="500">Crypto</Text>
                <Text mx="15px" fontWeight="500">Trade</Text>
            </Flex>
            <Flex justify="center" align="center">
                <Text mx="15px" fontWeight="500">Sign up</Text>
                <Button colorScheme="blackAlpha" bg="black">Get the app</Button>
            </Flex>
        </Flex>
    )
}

export default Navbar
