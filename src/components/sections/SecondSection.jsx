import {
  Tabs,
  TabList,
  TabPanels,
  Flex,
  Text,
  Button,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { SectionTwoCard } from "../SectionTwoCard";

export const SecondSection = () => {
  return (
    <Tabs variant="unstyled">
      <TabList>
        <Tab
          fontSize="20px"
          _selected={{
            fontWeight: 500,
            borderBottom: "1px solid black",
            outline: "none",
          }}>
          Leaders
        </Tab>
        <Tab
          fontSize="20px"
          _selected={{
            fontWeight: 500,
            borderBottom: "1px solid black",
            outline: "none",
          }}>
          Stocks
        </Tab>

        <Tab
          fontSize="20px"
          _selected={{
            fontWeight: 500,
            borderBottom: "1px solid black",
            outline: "none",
          }}>
          Crypto
        </Tab>

        <Tab
          fontSize="20px"
          _selected={{
            fontWeight: 500,
            borderBottom: "1px solid black",
            outline: "none",
          }}>
          Options (comming soon)
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Flex>
            <Flex w="48%" flexWrap="wrap" justify="center" align="center">
              <SectionTwoCard />
              <SectionTwoCard />
              <SectionTwoCard />
              <SectionTwoCard />
              <SectionTwoCard />
              <SectionTwoCard />
              <SectionTwoCard />
              <SectionTwoCard />
            </Flex>
            <Flex w="48%" justify="center" align="start" flexDir="column" p="32">
              <Text fontSize="40px" fontWeight="500">
                All of your assets, now in one place
              </Text>
              <Text>
                Deposit crypto to the Structure Mobile App and buy stocks,
                crypto, and other assets in seconds.
              </Text>
              <Button bg="black" color="white" mt="10">
                Browse all assets
              </Button>
            </Flex>
          </Flex>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>

        <TabPanel>
          <p>four!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
