import { Heading } from "@chakra-ui/react";

export const Category = (props) => {
  const { text } = props;
  return (
    <Heading color="teal.300" size="xs" mb={6}>
      {text}
    </Heading>
  );
};
