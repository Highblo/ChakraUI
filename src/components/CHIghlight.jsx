import { Heading, Highlight } from "@chakra-ui/react";

export const CHighlight = (props) => {
  const { query, styles, children } = props;
  return (
    <Heading size="xl">
      <Highlight 
        query={query}
        styles={styles}
      >
        {children}
      </Highlight>
    </Heading>
  );
};