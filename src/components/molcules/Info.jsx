import { InfoIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

export const Info = () => {
  return (
    <Box bgGradient="linear(to-t, green.200, pink.500)" py={2}>
      <Flex justify="center" align="center">
        <Text mr={4}>
          Build faster with Premium Chakra UI Components
          <InfoIcon ml={1} color="cyan.400" />
        </Text>
        <Button size="sm" color="white" bg="rgba(0, 0, 0, 0.2)">
          Learn more
        </Button>
      </Flex>
    </Box>
  );
};
