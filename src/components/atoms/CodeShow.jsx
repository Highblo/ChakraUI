import { Box, Button, Code, Flex } from "@chakra-ui/react";

export const CodeShow = (props) => {
  const { code } = props;
  return (
    <Flex bg="blue.900" justify="space-between" borderRadius="md" p={4}>
      <Code colorScheme="cyan">{code}</Code>
      <Button size="xs" bg="teal.200" color="black" _hover={{ opacity: "0.7" }}>
        COPY
      </Button>
    </Flex>
  );
};
