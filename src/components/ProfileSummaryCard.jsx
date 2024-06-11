import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import SummaryWidget from "./SummaryWidget";

const ProfileSummaryCard = ({
  profilePicture,
  size,
  userName,
  userId,
  action = null,
}) => {
  const profilePictureSize =
    size === "large" ? "47px" : size === "md" ? "40px" : "35px";
  const fontSize = size === "large" ? "large" : size === "md" ? "md" : "sm";

  return (
    <HStack width="100%" justifyContent="space-between">
      <HStack>
        <Image
          src={profilePicture}
          width={profilePictureSize}
          borderRadius={50}
          cursor="pointer"
        />
        <SummaryWidget fontSize={fontSize} title={userName} content={userId} />
      </HStack>

      {action}
    </HStack>
  );
};

export default ProfileSummaryCard;
