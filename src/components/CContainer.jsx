import { Box, Heading, Stack, Text } from "@chakra-ui/react";

export const CContainer = (props) => {
  const { Text1, Text2, Text3 } = props;
  return (
    <Box mb={4}>
      <Stack spacing={1}>
        <Heading color="orange.200">{Text1}</Heading>
        <Text fontSize="lg">Props: {Text3}</Text>
        <Text>{Text2}</Text>
      </Stack>
    </Box>
  );
};