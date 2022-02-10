import { Flex, Image, Text, Box } from "@chakra-ui/react";

import StockUpArrow from "../img/stockUpArrow.svg";

export const SectionTwoCard = () => {
  return (
    <Flex
      h="105px"
      w="300px"
      boxShadow="0px 1px 4px rgba(0, 0, 0, 0.15)"
      m="5"
      justify="space-evenly"
      align="center">
      <Image
        borderRadius="full"
        boxSize="45px"
        src="https://bit.ly/dan-abramov"
        alt="Dan Abramov"
      />
      <Box>
        <Text noOfLines={2} maxW="120px" fontSize="18px" fontWeight="bold">
          Yearn Classic
        </Text>
        <Text color="#5B616E">$82397</Text>
      </Box>
      <Flex justify="center" align="center">
        <Image
          borderRadius="full"
          mx="1"
          boxSize="20px"
          src={StockUpArrow}
          alt="Dan Abramov"
        />
        <Text>109.3%</Text>
      </Flex>
    </Flex>
  );
};
