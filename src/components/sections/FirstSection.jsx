import {
  Box,
  Flex,
  Text,
  Select,
  Input,
  Button,
  Image,
} from "@chakra-ui/react";
import EmptyMobile from "../../img/mobile.svg";

export const FirstSection = () => {
  return (
    <Flex justify="start" align="start" flexWrap="wrap">
      <Flex
        p="20px"
        flexWrap="wrap"
        h="640px"
        width="48%"
        m="2px"
        justify="center"
        minW="500px"
        direction="column"
        align="center">
        <Box p="10px" textAlign="left">
          <Text fontSize="44px" fontWeight="500">
            Buy stocks with crypto
          </Text>
          <Text maxW="400px">
            No market closes. No trading fees. All the stocks and crypto coins
            you love.
          </Text>

          <Box mt="70px" maxW="800px">
            <Text>Ready to start trading?</Text>
            <Flex mt="2">
              <Select
                w="25%"
                minW="100px"
                variant="filled"
                mr="1"
                placeholder="US +1"
                h="61px"
              />
              <Input
                variant="filled"
                placeholder="Enter your phone number"
                h="61px"
              />
              <Button bg="black" color="white" h="61px" ml="2" p="8">
                Send Link
              </Button>
            </Flex>
          </Box>
        </Box>
      </Flex>
      <Flex
        h="640px"
        width="48%"
        m="2px"
        p="100px"
        justify="center"
        align="center">
        <Image h="120%" src={EmptyMobile} />
      </Flex>
    </Flex>
  );
};
