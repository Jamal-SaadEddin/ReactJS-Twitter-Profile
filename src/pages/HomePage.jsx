import { Divider, Grid, GridItem, HStack } from "@chakra-ui/react";
import SideBar from "../components/SideBar";
import MainArea from "../components/MainArea";

const HomePage = () => {
  return (
    <Grid h="100vh" templateColumns="repeat(5, 1fr)">
      <GridItem colSpan={1}>
        <HStack>
          <SideBar />
          <Divider
            orientation="vertical"
            borderLeftWidth="2px"
            borderColor="gray.600"
            width="1%"
            height="100vh"
          />
        </HStack>
      </GridItem>
      <GridItem colSpan={3}>
        <MainArea />
      </GridItem>
      <GridItem colSpan={1}></GridItem>
    </Grid>
  );
};

export default HomePage;
