import { Heading, Link, VStack } from "@chakra-ui/react";
import React from "react";

const DiscoverBox = ({ title, children }) => {
  return (
    <VStack
      width="100%"
      alignItems="start"
      py={3}
      px={4}
      border="1px solid"
      borderColor="gray.600"
      borderRadius={20}
      rowGap={5}
    >
      <Heading fontSize="xl">{title}</Heading>
      {children}
      <ShowMoreLink />
    </VStack>
  );
};

export default DiscoverBox;

const ShowMoreLink = () => (
  <Link
    href="/"
    color="#1A8BD7"
    width="100%"
    _hover={{ textDecoration: "none" }}
  >
    Show more
  </Link>
);
