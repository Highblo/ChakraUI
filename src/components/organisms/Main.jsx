import { Box, Center, Heading, Stack, Text } from "@chakra-ui/react";
import { WhiteBox } from "../WhiteBox";

export const Main = () => {
  return (
    <Stack spacing={4} w="70%" m="0 auto">
      <WhiteBox>
        <Box bg="orange.400">Box</Box>
      </WhiteBox>
      <WhiteBox>
        <Heading bg="orange.400">Heading</Heading>
      </WhiteBox>
      <WhiteBox>
        <Text bg="orange.400">Text</Text>
      </WhiteBox>
      <WhiteBox>
        <Center bg="orange.400">Center</Center>
      </WhiteBox>
    </Stack>
  );
};
