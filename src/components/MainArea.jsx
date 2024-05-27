import { Button, HStack, Heading, Icon, Image, VStack } from "@chakra-ui/react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { LuBellPlus } from "react-icons/lu";
import { MdMoreHoriz } from "react-icons/md";
import PAGE_COVER_PICTURE from "../assets/React-cover-photo.png";
import PAGE_PROFILE_PICTURE from "../assets/React-profile-photo.png";

const MainArea = () => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <HStack gap={5}>
        <Icon as={FaArrowLeftLong} cursor="pointer" m={5} fontSize={20} />
        <VStack gap={0}>
          <Heading fontSize="xx-large">React</Heading>
          <Heading fontSize="md" color="gray.600">
            2,611 posts
          </Heading>
        </VStack>
      </HStack>
      <VStack gap={0} alignItems="start" mt={2} height={320}>
        <Image
          src={PAGE_COVER_PICTURE}
          width="100%"
          height={250}
          objectFit="cover"
          alt="Cover Image"
        />
        <HStack
          width="100%"
          justifyContent="space-between"
          position="relative"
          bottom="80px"
        >
          <Image
            src={PAGE_PROFILE_PICTURE}
            width={150}
            borderRadius={100}
            border="3px solid black"
            position="relative"
            left="30px"
            alt="Profile Image"
          />
          <HStack m={3} alignSelf="end">
            <Button
              fontSize={28}
              background="none"
              border="1px solid white"
              borderRadius={100}
              padding={0}
            >
              <MdMoreHoriz />
            </Button>
            <Button
              fontSize={24}
              background="none"
              border="1px solid white"
              borderRadius={100}
              padding={0}
            >
              <LuBellPlus />
            </Button>
            <Button
              fontSize={20}
              background="none"
              border="1px solid white"
              borderRadius={100}
            >
              Following
            </Button>
          </HStack>
        </HStack>
      </VStack>
    </div>
  );
};

export default MainArea;
