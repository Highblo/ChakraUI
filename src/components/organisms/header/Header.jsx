import { AtSignIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Flex,
  Heading,
  Input,
  useDisclosure,
} from "@chakra-ui/react";

import { Icons } from "../../molcules/Icons";
import { InputModal } from "./InputModal";

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
            onClick={onOpen}
          />
          <Icons />
        </Flex>
      </Container>
      <InputModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};
