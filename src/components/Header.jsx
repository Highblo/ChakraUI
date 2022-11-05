import { Box, Heading } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Box bg="teal.500" p={4} mb={4} textAlign="center" border="1px solid white">
      <Heading as="h1">ChakraUI Practice</Heading>
    </Box>
  );
};