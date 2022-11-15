import { Box } from "@chakra-ui/react";
import { Description } from "./Description";
import { TabArea } from "./TabArea";

export const Main = () => {
  return (
    <Box flex="2" pt={10} px={10}>
      <Description
        com="Box"
        text="Box is the most abstract component on top of which all other Chakra UI components are built. By default, it renders a `div` element"
      />
      <TabArea />
    </Box>
  );
};
