import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Heading,
  Icon,
  Image,
  List,
  ListItem,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { IoIosMore } from "react-icons/io";
import X_LOGO from "../assets/XLogo.png";
import ProfilePicture from "../assets/jamal_pp.jpg";
import sideBarButtons from "../constants/SideBarButtons";

const SideBar = () => {
  return (
    <Box height="100%">
      <Grid
        templateRows="1fr 1fr"
        height="100vh"
        width="100%"
        position="sticky"
        top={0}
      >
        <GridItem>
          <Image
            w={7}
            src={X_LOGO}
            alt="X Logo"
            ml={5}
            my={5}
            cursor="pointer"
          />
          <List mb={5}>
            {sideBarButtons.map((btn) => (
              <ListItem mb={1}>
                <Button
                  borderRadius={100}
                  padding={5}
                  justifyContent="left"
                  size="lg"
                  leftIcon={btn.logo}
                  gap={2}
                  bg="transparent"
                >
                  {btn.title}
                </Button>
              </ListItem>
            ))}
          </List>
          <Button
            size="lg"
            width="100%"
            background="#1D9BF0"
            borderRadius="20px"
            py={5}
            _hover={{ background: "#027bcc" }}
          >
            Post
          </Button>
        </GridItem>
        <GridItem alignSelf="end" m={5}>
          <HStack width="100%" justifyContent="space-between">
            <HStack>
              <Image
                src={ProfilePicture}
                width="47px"
                borderRadius={50}
                cursor="pointer"
              />
              <VStack>
                <Heading fontSize="large" cursor="pointer">
                  Jamal SaadEddin
                </Heading>
                <Heading
                  fontSize="large"
                  fontWeight="500"
                  color="gray.600"
                  cursor="pointer"
                >
                  @JamalSaadEddin
                </Heading>
              </VStack>
            </HStack>

            <Icon
              as={IoIosMore}
              fontSize={36}
              ml={3}
              padding={1}
              borderRadius="15px"
              cursor="pointer"
              _hover={{ background: "#292929" }}
            />
          </HStack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default SideBar;
