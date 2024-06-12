import { Grid, GridItem, Hide } from "@chakra-ui/react";
import DiscoverArea from "../components/DiscoverArea";
import MainArea from "../components/MainArea";
import SideBar from "../components/SideBar";

const HomePage = () => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        sm: "repeat(11, 1fr)",
        md: "repeat(11, 1fr)",
        lg: "repeat(11, 1fr)",
        xl: "repeat(8, 1fr)",
        "2xl": "repeat(5, 1fr)",
      }}
      columnGap={{
        base: 0,
        sm: 4,
        lg: 7,
      }}
    >
      <Hide below="sm">
        <GridItem
          colSpan={{
            base: 0,
            sm: 1,
            md: 1,
            lg: 3,
            xl: 2,
            "2xl": 1,
          }}
        >
          <SideBar />
        </GridItem>
      </Hide>
      <GridItem
        colSpan={{
          base: 1,
          sm: 10,
          md: 6,
          lg: 5,
          xl: 4,
          "2xl": 3,
        }}
      >
        <MainArea />
      </GridItem>
      <Hide below="md">
        <GridItem
          colSpan={{
            base: 0,
            sm: 0,
            md: 4,
            lg: 3,
            xl: 2,
            "2xl": 1,
          }}
        >
          <DiscoverArea />
        </GridItem>
      </Hide>
    </Grid>
  );
};

export default HomePage;
