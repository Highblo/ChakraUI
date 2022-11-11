import { Stack, Text } from "@chakra-ui/react";

import { Category } from "../atoms/Category";

export const Nav = () => {
  const layout = ["Box", "Center", "Container", "Flex", "Grid", "Stack"];
  const forms = [
    "Button",
    "Checkbox",
    "Editable",
    "Form Control",
    "Icon Button",
    "Input",
    "Radio",
    "Range Slider",
    "Select",
    "Slider",
    "Switch",
    "Textarea",
  ];
  return (
    <Stack spacing={3} p={3}>
      <Category text="LAYOUT" />
      {layout.map((item) => (
        <Text>{item}</Text>
      ))}
      <Category text="FORMS" />
      {forms.map((item) => (
        <Text>{item}</Text>
      ))}
    </Stack>
  );
};
