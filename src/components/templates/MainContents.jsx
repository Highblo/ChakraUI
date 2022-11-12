import { Container } from "@chakra-ui/react";

import { Sub } from "../molcules/Sub";
import { Main } from "../organisms/Main";
import { Nav } from "../organisms/Nav";

export const MainContents = () => {
  return (
    <Container maxW="8xl" display="flex">
      <Nav />
      <Main />
      <Sub />
    </Container>
  );
};
