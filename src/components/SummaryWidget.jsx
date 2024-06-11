import { Heading, VStack } from "@chakra-ui/react";
import React from "react";

const SummaryWidget = ({ fontSize, title, content }) => {
  const gap = fontSize === "large" ? 2 : 1;

  return (
    <VStack alignItems="start" gap={gap}>
      <Heading fontSize={fontSize} cursor="pointer">
        {title}
      </Heading>
      <Heading
        fontSize={fontSize}
        fontWeight="500"
        color="gray.600"
        cursor="pointer"
      >
        {content}
      </Heading>
    </VStack>
  );
};

export default SummaryWidget;
