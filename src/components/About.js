import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

function About() {
  return (
    <Box id="about" p={8} textAlign="center">
      <Heading fontSize="4xl" fontWeight="bold">
        About Me
      </Heading>
      <Text fontSize="xl" mt={4}>
        I have a strong background in front-end development with expertise in
        React and Chakra UI.
      </Text>
    </Box>
  );
}

export default About;
