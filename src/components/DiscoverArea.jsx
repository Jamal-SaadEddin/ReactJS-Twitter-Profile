import {
  Button,
  HStack,
  Heading,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { CiSearch } from "react-icons/ci";
import SVELTE from "../assets/svelte.png";
import VERCEL from "../assets/vercel.png";
import VITE from "../assets/vite.jpg";

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
        <HStack width="100%" justifyContent="space-between">
          <HStack>
            <Image
              src={SVELTE}
              width="40px"
              borderRadius={50}
              cursor="pointer"
            />
            <VStack alignItems="start" gap={1}>
              <Heading fontSize="md" cursor="pointer">
                Svelte
              </Heading>
              <Heading
                fontSize="md"
                fontWeight="500"
                color="gray"
                cursor="pointer"
              >
                @sveltejs
              </Heading>
            </VStack>
          </HStack>

          <Button
            color="black"
            bg="white"
            borderRadius={100}
            _hover={{ bg: "gray.100" }}
          >
            Follow
          </Button>
        </HStack>
        <HStack width="100%" justifyContent="space-between">
          <HStack>
            <Image src={VITE} width="40px" borderRadius={50} cursor="pointer" />
            <VStack alignItems="start" gap={1}>
              <Heading fontSize="md" cursor="pointer">
                Vite
              </Heading>
              <Heading
                fontSize="md"
                fontWeight="500"
                color="gray"
                cursor="pointer"
              >
                @vite_js
              </Heading>
            </VStack>
          </HStack>

          <Button
            color="black"
            bg="white"
            borderRadius={100}
            _hover={{ bg: "gray.100" }}
          >
            Follow
          </Button>
        </HStack>
        <HStack width="100%" justifyContent="space-between">
          <HStack>
            <Image
              src={VERCEL}
              width="40px"
              borderRadius={50}
              cursor="pointer"
            />
            <VStack alignItems="start" gap={1}>
              <Heading fontSize="md" cursor="pointer">
                Vercel
              </Heading>
              <Heading
                fontSize="md"
                fontWeight="500"
                color="gray"
                cursor="pointer"
              >
                @vercel
              </Heading>
            </VStack>
          </HStack>

          <Button
            color="black"
            bg="white"
            borderRadius={100}
            _hover={{ bg: "gray.100" }}
          >
            Follow
          </Button>
        </HStack>
        <Link
          href="/"
          color="#1A8BD7"
          width="100%"
          _hover={{ textDecoration: "none" }}
        >
          Show more
        </Link>
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
        position="sticky"
        top="61px"
      >
        <Heading fontSize="xl">Trends for you</Heading>
        <VStack alignItems="start" gap={1}>
          <Heading fontSize="md" cursor="pointer">
            Vercel
          </Heading>
          <Heading fontSize="md" fontWeight="500" color="gray" cursor="pointer">
            38K posts
          </Heading>
        </VStack>
        <VStack alignItems="start" gap={1}>
          <Heading fontSize="md" cursor="pointer">
            Vercel
          </Heading>
          <Heading fontSize="md" fontWeight="500" color="gray" cursor="pointer">
            38K posts
          </Heading>
        </VStack>
        <VStack alignItems="start" gap={1}>
          <Heading fontSize="md" cursor="pointer">
            Vercel
          </Heading>
          <Heading fontSize="md" fontWeight="500" color="gray" cursor="pointer">
            38K posts
          </Heading>
        </VStack>
        <VStack alignItems="start" gap={1}>
          <Heading fontSize="md" cursor="pointer">
            Vercel
          </Heading>
          <Heading fontSize="md" fontWeight="500" color="gray" cursor="pointer">
            38K posts
          </Heading>
        </VStack>
        <VStack alignItems="start" gap={1}>
          <Heading fontSize="md" cursor="pointer">
            Vercel
          </Heading>
          <Heading fontSize="md" fontWeight="500" color="gray" cursor="pointer">
            38K posts
          </Heading>
        </VStack>
        <VStack alignItems="start" gap={1}>
          <Heading fontSize="md" cursor="pointer">
            Vercel
          </Heading>
          <Heading fontSize="md" fontWeight="500" color="gray" cursor="pointer">
            38K posts
          </Heading>
        </VStack>
        <VStack alignItems="start" gap={1}>
          <Heading fontSize="md" cursor="pointer">
            Vercel
          </Heading>
          <Heading fontSize="md" fontWeight="500" color="gray" cursor="pointer">
            38K posts
          </Heading>
        </VStack>
        <Link
          href="/"
          color="#1A8BD7"
          width="100%"
          _hover={{ textDecoration: "none" }}
        >
          Show more
        </Link>
      </VStack>
    </VStack>
  );
};

export default DiscoverArea;
