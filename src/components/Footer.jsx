import { HStack, Link, Text } from "@chakra-ui/react";
import React from "react";
import footerLinks from "../constants/footerLinks";

const Footer = () => {
  return (
    <HStack
      width="100%"
      flexWrap="wrap"
      rowGap={0}
      fontSize="sm"
      color="gray.600"
      px={4}
    >
      {footerLinks.map((link) => (
        <Link key={link.title} href={link.to}>
          {link.title}
        </Link>
      ))}
      <Text>© 2024 X Corp.</Text>
    </HStack>
  );
};

export default Footer;
