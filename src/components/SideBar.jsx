import {
  Box,
  Button,
  Grid,
  GridItem,
  Icon,
  Image,
  Show,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { BsFeather } from "react-icons/bs";
import { IoIosMore } from "react-icons/io";
import X_LOGO from "../assets/XLogo.png";
import ProfilePicture from "../assets/jamal_pp.jpg";
import sideBarButtons from "../constants/SideBarButtons";
import ProfileSummaryCard from "./ProfileSummaryCard";
import SideBarList from "./SideBarList";

const SideBar = () => {
  const avatarOnly = useBreakpointValue({ base: true, lg: false });

  return (
    <Box height="100%" ml={2}>
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
          <SideBarList sideBarButtons={sideBarButtons} />
          <Button
            size="lg"
            width={{
              base: "auto",
              lg: "100%",
            }}
            background="#1D9BF0"
            borderRadius={{
              base: "100%",
              lg: "20px",
            }}
            p={0}
            ml={2}
            _hover={{ background: "#027bcc" }}
          >
            <Show above="lg">Post</Show>
            <Show below="lg">
              <Icon as={BsFeather} fontSize={24} />
            </Show>
          </Button>
        </GridItem>
        <GridItem alignSelf="end" mb={5} ml={2}>
          <ProfileSummaryCard
            profilePicture={ProfilePicture}
            size="large"
            userName="Jamal SaadEddin"
            userId="@JamalSaadEddin"
            action={
              <Button bg="none" borderRadius={100} p={0} fontSize={32}>
                <Icon as={IoIosMore} />
              </Button>
            }
            avatarOnly={avatarOnly}
          />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default SideBar;
