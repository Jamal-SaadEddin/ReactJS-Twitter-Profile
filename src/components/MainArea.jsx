import { HStack, Heading, Icon, VStack } from "@chakra-ui/react";
import { FaArrowLeftLong } from "react-icons/fa6";

const MainArea = () => {
  return (
    <>
      <HStack gap={5}>
        <Icon as={FaArrowLeftLong} cursor="pointer" m={5} fontSize={20} />
        <VStack gap={0}>
          <Heading fontSize="xx-large">React</Heading>
          <Heading fontSize="md" color="gray.600">
            2,611 posts
          </Heading>
        </VStack>
      </HStack>
    </>
  );
};

export default MainArea;
