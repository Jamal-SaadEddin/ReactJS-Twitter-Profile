import { VStack, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import DiscoverBox from "./DiscoverBox";
import Footer from "./Footer";
import SearchInput from "./SearchInput";
import {
  SuggestedTrendsWidgets,
  SuggestedUsersWidgets,
} from "./SuggestedContent";

const DiscoverArea = () => {
  const SearchDivBgColor = useColorModeValue("white", "black");

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
