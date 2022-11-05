import { ChakraProvider } from "@chakra-ui/react";

import { CHighlight } from "./components/CHIghlight";
import { CText } from "./components/CText";
import { Header } from "./components/Header";
import { theme } from "./theme/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <CHighlight />
      <CText />
    </ChakraProvider>
  );
};

export default App;