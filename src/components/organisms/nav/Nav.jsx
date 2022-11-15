import { Box, Stack, Text } from "@chakra-ui/react";

import { Category } from "../../atoms/Category";
import { Categories } from "./Categories";

export const Nav = () => {
  const { layout, forms, overlay, feedback } = Categories;

  return (
    <Box h="88vh" flex="0.6" p={4} overflowY="scroll">
      <Stack spacing={8} pt={3}>
        <Box>
          <Category text="LAYOUT" />
          <Stack spacing={4}>
            {layout.map((item) => (
              <Text key={item} cursor="pointer">
                {item}
              </Text>
            ))}
          </Stack>
        </Box>
        <Box>
          <Category text="FORMS" />
          <Stack spacing={4}>
            {forms.map((item) => (
              <Text key={item} cursor="pointer">
                {item}
              </Text>
            ))}
          </Stack>
        </Box>
        <Box>
          <Category text="OVERLAY" />
          <Stack spacing={4}>
            {overlay.map((item) => (
              <Text key={item} cursor="pointer">
                {item}
              </Text>
            ))}
          </Stack>
        </Box>
        <Box>
          <Category text="FEEDBACK" />
          <Stack spacing={4}>
            {feedback.map((item) => (
              <Text key={item} cursor="pointer">
                {item}
              </Text>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};
