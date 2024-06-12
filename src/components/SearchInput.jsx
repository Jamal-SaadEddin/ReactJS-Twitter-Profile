import {
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
  const SearchInputBgColor = useColorModeValue("gray.100", "gray.700");
  return (
    <InputGroup size="md">
      <InputLeftElement pointerEvents="none">
        <Icon as={CiSearch} color="gray.500" fontSize="20px" />
      </InputLeftElement>
      <Input
        name="search"
        type="text"
        placeholder="Search"
        bg={SearchInputBgColor}
        border="0"
        borderRadius={100}
      />
    </InputGroup>
  );
};

export default SearchInput;
