import { Heading, Highlight } from "@chakra-ui/react";

export const CHighlight = () => {
  return (
    <Heading size="md">
      <Highlight 
        query={["query", "styles"]}
        styles={{color: "orange.100" }}
      >
        Highlight
        props: query="強調するテキスト"styles="スタイルをあてる"
      </Highlight>
    </Heading>
  );
};