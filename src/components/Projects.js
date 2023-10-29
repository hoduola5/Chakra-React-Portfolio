import React from "react";
import { Box, Heading, Text, Link } from "@chakra-ui/react";

function Projects() {
  return (
    <Box id="projects" p={8} textAlign="center">
      <Heading fontSize="4xl" fontWeight="bold">
        Projects
      </Heading>
      <Text fontSize="xl" mt={4}>
        You can reach out to me via email or through my social media profiles.
      </Text>
      <Link href="mailto:your.email@example.com" fontSize="lg" mt={4}>
        Email: your.email@example.com
      </Link>
    </Box>
  );
}

export default Projects;
