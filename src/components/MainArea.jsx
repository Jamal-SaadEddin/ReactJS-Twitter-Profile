import { Box } from "@chakra-ui/react";
import { currentUser } from "../constants/userData";
import UserProfile from "./UserProfile";

const MainArea = () => {
  return (
    <Box
      width="100%"
      minHeight="100%"
      borderRight="1px solid"
      borderRightColor="gray.600"
      borderLeft="1px solid"
      borderLeftColor="gray.600"
    >
      <UserProfile user={currentUser} />
    </Box>
  );
};

export default MainArea;
