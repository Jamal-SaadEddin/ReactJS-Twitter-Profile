import {
  Button,
  HStack,
  Heading,
  Icon,
  Image,
  Link,
  VStack,
} from "@chakra-ui/react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { LuBellPlus } from "react-icons/lu";
import { MdMoreHoriz } from "react-icons/md";
import { RiLinkM } from "react-icons/ri";
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
          <HStack mr={5} mb={3} alignSelf="end">
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
      <VStack gap={0} alignItems="start" m={5}>
        <Heading fontSize="xx-large">React</Heading>
        <Heading fontSize="md" color="gray.600">
          @reactjs
        </Heading>
        <Heading fontSize="md" fontWeight={400} mt={4}>
          The library for web and native user interfaces
        </Heading>
        <HStack gap={5} mt={2}>
          <Link href="https://react.dev/" target="_blank" color="#1A8BD7">
            <Icon
              as={RiLinkM}
              color="gray.600"
              position="relative"
              top="5px"
              mr={1}
              fontSize="20px"
            />
            react.dev
          </Link>
          <Heading color="gray.600" fontSize="md" fontWeight={400}>
            <Icon as={FaRegCalendarAlt} position="relative" top="1px" mr={1} />
            Joined July 2013
          </Heading>
        </HStack>
        <HStack gap={4} mt={2}>
          <HStack gap={1}>
            <Heading fontSize="md">267</Heading>
            <Heading fontSize="md" color="gray.600" fontWeight={400}>
              Following
            </Heading>
          </HStack>
          <HStack gap={1}>
            <Heading fontSize="md">708.1K</Heading>
            <Heading fontSize="md" color="gray.600" fontWeight={400}>
              Followers
            </Heading>
          </HStack>
        </HStack>
        <HStack mt={4}>
          <Heading fontSize="md" color="gray.600" fontWeight={400}>
            Not followed by anyone you’re following
          </Heading>
        </HStack>
      </VStack>
    </div>
  );
};

export default MainArea;
