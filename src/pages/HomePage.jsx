import { Grid, GridItem } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Grid h="100vh" templateColumns="repeat(5, 1fr)">
      <GridItem colSpan={1} bg="tomato"></GridItem>
      <GridItem colSpan={3} bg="papayawhip"></GridItem>
      <GridItem colSpan={1} bg="tomato"></GridItem>
    </Grid>
  );
};

export default HomePage;
