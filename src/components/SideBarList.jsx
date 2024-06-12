import { Button, Hide, List, ListItem } from "@chakra-ui/react";
import React from "react";

const SideBarList = ({ sideBarButtons }) => {
  return (
    <List mb={5}>
      {sideBarButtons.map((btn) => (
        <ListItem key={btn.title} mb={1}>
          <Button
            borderRadius={100}
            padding={5}
            justifyContent="left"
            size="lg"
            gap={2}
            bg="transparent"
          >
            {btn.logo}
            <Hide below="lg">
              <span>&nbsp;</span>
              {btn.title}
            </Hide>
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default SideBarList;
