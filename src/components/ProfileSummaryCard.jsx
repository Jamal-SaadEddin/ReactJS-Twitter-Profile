import { HStack, Heading, Image, VStack } from "@chakra-ui/react";
import React from "react";

const ProfileSummaryCard = ({ profilePicture, size, action = null }) => {
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
        <VStack>
          <Heading fontSize={fontSize} cursor="pointer">
            Jamal SaadEddin
          </Heading>
          <Heading
            fontSize={fontSize}
            fontWeight="500"
            color="gray.600"
            cursor="pointer"
          >
            @JamalSaadEddin
          </Heading>
        </VStack>
      </HStack>

      {action}
    </HStack>
  );
};

export default ProfileSummaryCard;
