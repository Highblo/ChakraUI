import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "./theme/theme";
import { Header } from "./components/organisms/header/Header";
import { MainContents } from "./components/templates/MainContents";
import { Info } from "./components/molcules/Info";

function App() {

  return (
    <ChakraProvider theme={theme}>
      <Info />
      <Header />
      <MainContents />
    </ChakraProvider>
  );
};

export default App;