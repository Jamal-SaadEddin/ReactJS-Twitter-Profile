import { Grid, GridItem } from "@chakra-ui/react";
import MainArea from "../components/MainArea";
import SideBar from "../components/SideBar";

const HomePage = () => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" columnGap={10}>
      <GridItem colSpan={1}>
        <SideBar />
      </GridItem>
      <GridItem colSpan={3}>
        <MainArea />
      </GridItem>
      <GridItem colSpan={1}></GridItem>
    </Grid>
  );
};

export default HomePage;
