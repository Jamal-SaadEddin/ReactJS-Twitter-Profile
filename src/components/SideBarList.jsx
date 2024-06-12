import { Button, List, ListItem } from "@chakra-ui/react";
import React from "react";

const SideBarList = ({ sideBarButtons }) => {
  return (
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
  );
};

export default SideBarList;
