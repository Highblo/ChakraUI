import { Box, Stack, Text } from "@chakra-ui/react";

export const Sub = () => {
  return (
    <Box flex="0.6" p={4}>
      <Box fontSize="0.9rem" color="gray.400" fontFamily="fantasy">
        <Text mb={4}>ON THIS PAGE</Text>
        <Text mb={2}>import</Text>
        <Text mb={3}>Changing the font size</Text>
        <Stack ml={3}>
          <Text>Truncate text</Text>
          <Text>Override style</Text>
          <Text>Override the element</Text>
        </Stack>
      </Box>
    </Box>
  );
};
