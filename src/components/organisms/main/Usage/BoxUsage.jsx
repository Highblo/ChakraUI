import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import { CodeShow } from "../../../atoms/CodeShow";
import { WhiteBox } from "../../../atoms/WhiteBox";
import { ImportCode } from "../../../molcules/ImportCode";

export const BoxUsage = () => {
  return (
    <Box my={8}>
      <ImportCode code="import { Box } from '@chakra-ui/react'" />
      <Box>
        <Heading size="lg" mb={5}>
          Usage
        </Heading>
        <Text mb={2}>
          The Box component is useful because it helps with three common use
          cases:
        </Text>
        <Stack as="ul" spacing={1} listStylePosition="inside">
          <Box as="li">Create responsive layouts with ease.</Box>
          <Box as="li">
            Provide a shorthand way to pass styles via props (bg instead of
            backgroundColor).
          </Box>
          <Box as="li">
            Compose new component and allow for override using the as prop.
          </Box>
        </Stack>
        <WhiteBox>
          <Box bg="tomato" p={3}>
            This is the Box
          </Box>
        </WhiteBox>
        <CodeShow code="<Box bg='tomato' p={3}>This is the Box</Box>" />
      </Box>
    </Box>
  );
};
