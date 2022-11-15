import { Container } from "@chakra-ui/react";

import { Sub } from "../molcules/Sub";
import { Main } from "../organisms/main/Main";
import { Nav } from "../organisms/nav/Nav";

export const MainContents = () => {
  return (
    <Container maxW="8xl" display="flex" pb={6}>
      <Nav />
      <Main />
      <Sub />
    </Container>
  );
};
