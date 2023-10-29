import React from "react";
import {
  Box,
  Button,
  HStack,
  Heading,
  Text,
  VStack,
  Image,
  Link,
} from "@chakra-ui/react";

function Home() {
  return (
    <VStack
      id="home"
      p={8}
      // border="2px solid red"
      alignItems="center"
      width="100%"
      backgroundColor="#5173EC"
    >
      <HStack
        // border="2px solid yellow"
        justifyContent="space-between"
        width="full"
        flexWrap={{ base: "wrap", lg: "nowrap" }}
      >
        <VStack
          // border="2px solid blue"
          width={{ base: "full", lg: "50%" }}
          alignItems={{ base: "center", lg: "flex-start" }}
        >
          <Heading color="#FFFFFF">
            <Text fontSize={{ base: "24px", lg: "48px" }}>
              My name is{" "}
              <Text as="span" color="#922B15">
                {" "}
                HAMMED
              </Text>{" "}
              <br />I am a Software Engineer
            </Text>
          </Heading>
          <HStack
            // border="2px solid brown"
            justifyContent="space-between"
            width="100%"
          >
            <Text
              fontSize={{ base: "12px", lg: "24px" }}
              backgroundColor="#FFFFFF"
              padding="5px"
              borderRadius="5px"
            >
              HTML
            </Text>
            <Text
              fontSize={{ base: "12px", lg: "24px" }}
              backgroundColor="#FFFFFF"
              padding="5px"
              borderRadius="5px"
            >
              CSS
            </Text>
            <Text
              fontSize={{ base: "12px", lg: "24px" }}
              backgroundColor="#FFFFFF"
              padding="5px"
              borderRadius="5px"
            >
              JAVASCRIPT
            </Text>
            <Text
              fontSize={{ base: "12px", lg: "24px" }}
              backgroundColor="#FFFFFF"
              padding="5px"
              borderRadius="5px"
            >
              REACT
            </Text>
            <Text
              fontSize={{ base: "12px", lg: "24px" }}
              backgroundColor="#FFFFFF"
              padding="5px"
              borderRadius="5px"
            >
              NODEJS
            </Text>
          </HStack>
        </VStack>
        <Box boxSize="350px">
          <Image
            src="/images/portfolio-img.png"
            alt="Your Name"
            boxSize="350px"
            css={{ borderRadius: "50%" }} /* Apply circular shape */
            objectFit="cover"
          />
        </Box>
      </HStack>
      <Link passHref href="/#contact">
        <Button
          // border="2px solid green"
          backgroundColor="#922B15"
          color="#FFFFFF"
        >
          CONTACT ME
        </Button>
      </Link>
    </VStack>
  );
}

export default Home;
