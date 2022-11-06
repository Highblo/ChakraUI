import { Box } from "@chakra-ui/react";

export const WhiteBox = (props) => {
  const { children } = props;
  return (
    <Box w="80%" border="1px solid white" p={2} borderRadius="xl">
      {children}
    </Box>
  );
}