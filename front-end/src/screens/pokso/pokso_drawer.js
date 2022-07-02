import React from "react";
import styled from "styled-components";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import theme from "../../data/theme";

const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 190px;
  margin: 50px 10px;
`;

const Divider = styled.div`
  display: flex;
  width: 100%;
  height: 1.5px;
  background-color: white;
  opacity: 0.3;
`;

export default function PoksoDrawer() {
  var drawer_list1 = ["폭소1", "폭소2", "폭소3", "폭소4", "폭소5"];
  var drawer_list2 = ["폭소6", "폭소7", "폭소8", "폭소9", "폭소10"];
  return (
    <View>
      <List>
        <Divider />

        {drawer_list1.map((text, index) => (
          <ListItem key={text} disablePadding style={{ padding: 1.5 }}>
            <Link to={`/pokso/${index + 1}`} style={{ textDecoration: "none" }}>
              <ListItemButton
                sx={{
                  borderRadius: 5,
                  "&:hover": {
                    backgroundColor: "gray",
                    opacity: 0.8,
                  },
                }}
              >
                <ListItemText
                  primaryTypographyProps={{
                    color: "white",
                    fontSize: theme.size.drawer_text,
                  }}
                  primary={text}
                ></ListItemText>
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
        <Divider />
        {drawer_list2.map((text, index) => (
          <ListItem key={text} disablePadding style={{ padding: 1.5 }}>
            <Link to={`/pokso/${index + 6}`} style={{ textDecoration: "none" }}>
              <ListItemButton
                sx={{
                  borderRadius: 5,
                  "&:hover": {
                    backgroundColor: "gray",
                  },
                }}
              >
                <ListItemText
                  primaryTypographyProps={{
                    color: "white",
                    fontSize: theme.size.drawer_text,
                  }}
                  primary={text}
                ></ListItemText>
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
        <Divider />
      </List>
    </View>
  );
}
