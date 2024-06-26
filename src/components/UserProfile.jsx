import {
  Button,
  HStack,
  Heading,
  Icon,
  Image,
  Link,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BiRepost } from "react-icons/bi";
import { CiBookmark } from "react-icons/ci";
import { FaRegCalendarAlt, FaRegComment } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoHeartOutline, IoShareOutline } from "react-icons/io5";
import { LuBellPlus } from "react-icons/lu";
import { MdMoreHoriz, MdOutlineViewKanban } from "react-icons/md";
import { RiLinkM } from "react-icons/ri";

const UserProfile = ({ user }) => {
  return (
    <>
      <HStack gap={5}>
        <Icon as={FaArrowLeftLong} cursor="pointer" m={5} fontSize={20} />
        <VStack gap={0}>
          <Heading fontSize="xx-large">{user.name}</Heading>
          <Heading fontSize="md" color="gray.600">
            {user.postsCount} posts
          </Heading>
        </VStack>
      </HStack>
      <VStack gap={0} alignItems="start" mt={2} height={320}>
        <Image
          src={user.coverPicture}
          width="100%"
          height={250}
          objectFit="cover"
          alt="Cover Image"
        />
        <HStack
          width="100%"
          justifyContent="space-between"
          position="relative"
          bottom={{
            base: "40px",
            lg: "80px",
          }}
        >
          <Image
            src={user.profilePicture}
            width={{
              base: "100px",
              lg: "150px",
            }}
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
        <Heading fontSize="xx-large">{user.name}</Heading>
        <Heading fontSize="md" color="gray.600">
          {user._id}
        </Heading>
        <Heading fontSize="md" fontWeight={400} mt={4}>
          {user.bio}
        </Heading>
        <HStack gap={5} mt={2}>
          <Link href={user.personalLinkURL} target="_blank" color="#1A8BD7">
            <Icon
              as={RiLinkM}
              color="gray.600"
              position="relative"
              top="5px"
              mr={1}
              fontSize="20px"
            />
            {user.personalLinkTitle}
          </Link>
          <Heading color="gray.600" fontSize="md" fontWeight={400}>
            <Icon as={FaRegCalendarAlt} position="relative" top="1px" mr={1} />
            Joined {user.dateJoined}
          </Heading>
        </HStack>
        <HStack gap={4} mt={2}>
          <HStack gap={1}>
            <Heading fontSize="md">{user.followingCount}</Heading>
            <Heading fontSize="md" color="gray.600" fontWeight={400}>
              Following
            </Heading>
          </HStack>
          <HStack gap={1}>
            <Heading fontSize="md">{user.followersCount}</Heading>
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
      <Tabs isFitted>
        <TabList>
          <Tab fontWeight={700}>Posts</Tab>
          <Tab fontWeight={700}>Replies</Tab>
          <Tab fontWeight={700}>Media</Tab>
          <Tab fontWeight={700}>Likes</Tab>
        </TabList>
        <TabPanels>
          <TabPanel p={0}>
            {user.posts.map((post) => (
              <HStack
                key={post.id}
                width="100%"
                alignItems="start"
                borderTop="1px solid"
                borderTopColor="gray.600"
                p={5}
              >
                <Image
                  src={user.profilePicture}
                  width="40px"
                  borderRadius={100}
                />
                <VStack width="100%" alignItems="start" gap={0}>
                  <HStack gap={1}>
                    <Heading fontSize="md">{user.name}</Heading>
                    <Heading fontSize="md" color="gray.600" fontWeight={400}>
                      {user._id} · {post.date}
                    </Heading>
                  </HStack>
                  <Text fontSize="md">{post.content}</Text>
                  <HStack width="100%" justifyContent="space-between" mt={1}>
                    <Button
                      leftIcon={<FaRegComment size="20px" />}
                      fontSize="sm"
                      background="none"
                      color="gray.600"
                      borderRadius={100}
                      padding={0}
                    >
                      {post.commentsCount}
                    </Button>
                    <Button
                      leftIcon={<BiRepost size="25px" />}
                      fontSize="sm"
                      background="none"
                      color="gray.600"
                      borderRadius={100}
                      padding={0}
                    >
                      {post.repostsCount}
                    </Button>
                    <Button
                      leftIcon={<IoHeartOutline size="20px" />}
                      fontSize="sm"
                      background="none"
                      color="gray.600"
                      borderRadius={100}
                      padding={0}
                    >
                      {post.likesCount}
                    </Button>
                    <Button
                      leftIcon={<MdOutlineViewKanban size="20px" />}
                      fontSize="sm"
                      background="none"
                      color="gray.600"
                      borderRadius={100}
                      padding={0}
                    >
                      {post.viewsCount}
                    </Button>
                    <HStack gap={0}>
                      <Button
                        fontSize={20}
                        background="none"
                        color="gray.600"
                        borderRadius={100}
                        padding={0}
                      >
                        <CiBookmark />
                      </Button>
                      <Button
                        fontSize={20}
                        background="none"
                        color="gray.600"
                        borderRadius={100}
                        padding={0}
                      >
                        <IoShareOutline />
                      </Button>
                    </HStack>
                  </HStack>
                </VStack>
              </HStack>
            ))}
          </TabPanel>
          <TabPanel>
            <p>Replies!</p>
          </TabPanel>
          <TabPanel>
            <p>Media!</p>
          </TabPanel>
          <TabPanel>
            <p>Likes!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default UserProfile;
