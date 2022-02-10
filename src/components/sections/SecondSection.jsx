import {
  Tabs,
  TabList,
  TabPanels,
  Flex,
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
            <Flex w="48%">Second</Flex>
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
