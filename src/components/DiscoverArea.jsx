import {
  Button,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { CiSearch } from "react-icons/ci";

import { suggestedTrends, suggestedUsers } from "../constants/suggestedContent";
import DiscoverBox from "./DiscoverBox";
import Footer from "./Footer";
import ProfileSummaryCard from "./ProfileSummaryCard";
import SummaryWidget from "./SummaryWidget";

const DiscoverArea = () => {
  const SuggestedUsersWidgets = suggestedUsers.map((user) => (
    <ProfileSummaryCard
      profilePicture={user.image}
      size="md"
      userName={user.name}
      userId={user._id}
      action={<FollowButton />}
    />
  ));

  const SuggestedTrendsWidgets = suggestedTrends.map((trend) => (
    <SummaryWidget
      fontSize="md"
      title={trend.title}
      content={trend.postsCount}
    />
  ));

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
      <DiscoverBox title="You might like" children={SuggestedUsersWidgets} />
      <VStack position="sticky" top="61px" gap={4}>
        <DiscoverBox title="Trends for you" children={SuggestedTrendsWidgets} />
        <Footer />
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
