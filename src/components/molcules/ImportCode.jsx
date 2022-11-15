import { Box, Heading, Stack } from "@chakra-ui/react";
import { CodeShow } from "../atoms/CodeShow";

export const ImportCode = (props) => {
  const { code } = props;
  return (
    <Box mb={10}>
      <Stack spacing={6}>
        <Heading size="lg">Import</Heading>
        <CodeShow code={code} />
      </Stack>
    </Box>
  );
};
