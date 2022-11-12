import { ChatIcon, ViewIcon } from "@chakra-ui/icons";
import { Box, Button, Heading, HStack, Text } from "@chakra-ui/react";

export const Description = (props) => {
  const { com, text } = props;
  return (
    <Box>
      <Heading mb={6}>{com}</Heading>
      <Text mb={5}>{text}</Text>
      <HStack spacing={4}>
        <Button
          leftIcon={<ViewIcon />}
          size="sm"
          variant="outline"
          color="gray.400"
          borderColor="gray.500"
          _hover={{ color: "white", transform: "translateY(-3px)" }}
        >
          Source
        </Button>
        <Button
          leftIcon={<ChatIcon color="red.500" />}
          size="sm"
          variant="outline"
          color="gray.400"
          borderColor="gray.500"
          _hover={{ color: "white", transform: "translateY(-3px)" }}
        >
          @chakra-ui/layout
        </Button>
      </HStack>
    </Box>
  );
};
