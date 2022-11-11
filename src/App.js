import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "./theme/theme";
import { Header } from "./components/organisms/Header";
import { MainContents } from "./components/templates/MainContents";

function App() {

  return (
    <ChakraProvider theme={theme}>
      <Header />
      <MainContents />
    </ChakraProvider>
  );
};

export default App;