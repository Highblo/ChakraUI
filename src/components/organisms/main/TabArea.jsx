import {
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tab,
  Text,
} from "@chakra-ui/react";

import { BoxUsage } from "./Usage/BoxUsage";

export const TabArea = () => {
  return (
    <Tabs variant="line" colorScheme="pink">
      <TabList>
        <Tab>Usage</Tab>
        <Tab>Props</Tab>
        <Tab>Theming</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <BoxUsage />
        </TabPanel>
        <TabPanel>
          <Text>kkkk</Text>
        </TabPanel>
        <TabPanel>
          <Text>fooo</Text>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
