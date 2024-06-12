import { Button, VStack, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { suggestedTrends, suggestedUsers } from "../constants/suggestedContent";
import DiscoverBox from "./DiscoverBox";
import Footer from "./Footer";
import ProfileSummaryCard from "./ProfileSummaryCard";
import SearchInput from "./SearchInput";
import SummaryWidget from "./SummaryWidget";

const DiscoverArea = () => {
  const SearchDivBgColor = useColorModeValue("white", "black");

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
        bg={SearchDivBgColor}
        justifyContent="center"
      >
        <SearchInput />
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
