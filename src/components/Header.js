import React from "react";
import {
  Box,
  Flex,
  Link,
  Text,
  IconButton,
  useDisclosure,
  Collapse,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

function Header() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex
      justify="space-between"
      align="center"
      p={4}
      bg="blue.400"
      width={{ base: "100%", lg: "full" }}
    >
      <Text fontSize="2xl" fontWeight="bold" color="white">
        My Portfolio
      </Text>
      <Box display={{ base: "none", md: "block" }}>
        <Link mx={2} color="white" href="#home">
          Home
        </Link>
        <Link mx={2} color="white" href="#about">
          About
        </Link>
        <Link mx={2} color="white" href="#contact">
          Contact
        </Link>
        <Link mx={2} color="white" href="#projects">
          Projects
        </Link>
      </Box>
      <Box display={{ base: "block", md: "none" }}>
        <IconButton
          aria-label={isOpen ? "Close menu" : "Open menu"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          onClick={onToggle}
          bg="transparent"
          _hover={{ background: "transparent" }}
        />
        <Collapse in={isOpen}>
          <Box mt={4}>
            <Link mx={2} color="white" href="#home">
              Home
            </Link>
            <Link mx={2} color="white" href="#about">
              About
            </Link>
            <Link mx={2} color="white" href="#contact">
              Contact
            </Link>
            <Link mx={2} color="white" href="#projects">
              Projects
            </Link>
          </Box>
        </Collapse>
      </Box>
    </Flex>
  );
}

export default Header;
