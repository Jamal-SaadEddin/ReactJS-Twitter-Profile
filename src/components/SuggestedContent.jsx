import { Button } from "@chakra-ui/react";
import {
  suggestedTrends,
  suggestedUsers,
} from "./../constants/suggestedContent";
import ProfileSummaryCard from "./ProfileSummaryCard";
import SummaryWidget from "./SummaryWidget";

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

export const SuggestedUsersWidgets = suggestedUsers.map((user) => (
  <ProfileSummaryCard
    key={user._id}
    profilePicture={user.image}
    size="md"
    userName={user.name}
    userId={user._id}
    action={<FollowButton />}
  />
));

export const SuggestedTrendsWidgets = suggestedTrends.map((trend) => (
  <SummaryWidget
    key={trend.title}
    fontSize="md"
    title={trend.title}
    content={trend.postsCount}
  />
));
