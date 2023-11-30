import { ChakraProvider } from "@chakra-ui/react";
import Router from "./Router";
import GlobalStyle from "./styles/globalStyle";

function App() {
  return (
    <>
      {/* <ChakraProvider> */}
      <GlobalStyle />
      <Router />
      {/* </ChakraProvider> */}
    </>
  );
}

export default App;
