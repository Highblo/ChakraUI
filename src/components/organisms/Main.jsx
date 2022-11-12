import { Box, Center, Heading, Stack, Text } from "@chakra-ui/react";
import { WhiteBox } from "../WhiteBox";
import { Description } from "./Description";

export const Main = () => {
  return (
    <Box flex="2" pt={10} pl={4} pr={8}>
      <Description
        com="Box"
        text="Box is the most abstract component on top of which all other Chakra UI components are built. By default, it renders a `div` element"
      />
    </Box>
  );
};
