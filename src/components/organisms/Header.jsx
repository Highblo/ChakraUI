import { AtSignIcon } from "@chakra-ui/icons";
import { Box, Container, Flex, Heading, Input } from "@chakra-ui/react";
import { Icons } from "../molcules/Icons";

export const Header = () => {
  return (
    <Box py={3} mb={4}>
      <Container maxW="8xl" display="flex" alignItems="center">
        <Heading fontSize="3xl" fontWeight="semibold" w="23%">
          <AtSignIcon bg="green.500" borderRadius="full" mr={2} />
          chakra
        </Heading>
        <Flex w="77%">
          <Input
            placeholder="Serch the docs"
            size="lg"
            bg="gray.700"
            border="none"
            mr={10}
          />
          <Icons />
        </Flex>
      </Container>
    </Box>
  );
};
