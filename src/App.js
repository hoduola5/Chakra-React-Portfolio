import React from "react";
import { ChakraProvider, CSSReset, Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Box bg="gray.100">
        <Header />
        <Home />
        <About />
        <Contact />
        <Projects />
      </Box>
    </ChakraProvider>
  );
}

export default App;
