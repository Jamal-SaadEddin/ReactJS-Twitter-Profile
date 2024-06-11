import {
  Button,
  HStack,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { CiSearch } from "react-icons/ci";

import { suggestedTrends, suggestedUsers } from "../constants/suggestedContent";
import ProfileSummaryCard from "./ProfileSummaryCard";
import SummaryWidget from "./SummaryWidget";

const DiscoverArea = () => {
  return (
    <VStack height="100%" pb={5} pr={5} gap={4}>
      <VStack
        w="100%"
        position="sticky"
        top={0}
        zIndex={1000}
        h="50px"
        bg="black"
        justifyContent="center"
      >
        <InputGroup size="md">
          <InputLeftElement pointerEvents="none">
            <Icon as={CiSearch} color="gray.500" fontSize="20px" />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Search"
            bg="#202327"
            border="0"
            borderRadius={100}
          />
        </InputGroup>
      </VStack>
      <VStack
        width="100%"
        alignItems="start"
        py={3}
        px={4}
        border="1px solid"
        borderColor="gray.600"
        borderRadius={20}
        gap={5}
      >
        <Heading fontSize="xl">You might like</Heading>
        {suggestedUsers.map((user) => (
          <ProfileSummaryCard
            profilePicture={user.image}
            size="md"
            userName={user.name}
            userId={user._id}
            action={<FollowButton />}
          />
        ))}

        <ShowMoreLink />
      </VStack>
      <VStack position="sticky" top="61px" gap={4}>
        <VStack
          width="100%"
          alignItems="start"
          py={3}
          px={4}
          border="1px solid"
          borderColor="gray.600"
          borderRadius={20}
          gap={5}
        >
          <Heading fontSize="xl">Trends for you</Heading>
          {suggestedTrends.map((trend) => (
            <SummaryWidget
              fontSize="md"
              title={trend.title}
              content={trend.postsCount}
            />
          ))}

          <ShowMoreLink />
        </VStack>
        <HStack
          width="100%"
          flexWrap="wrap"
          rowGap={0}
          fontSize="sm"
          color="gray.600"
          px={4}
        >
          <Link href="/">Terms of Service</Link>
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Cookie Policy</Link>
          <Link href="/">Accessibility</Link>
          <Link href="/">Ads info</Link>
          <Link href="/">More ···</Link>
          <Text>© 2024 X Corp.</Text>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default DiscoverArea;

const FollowButton = () => (
  <Button
    color="black"
    bg="white"
    borderRadius={100}
    _hover={{ bg: "gray.100" }}
  >
    Follow
  </Button>
);

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
