import React from "react";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "../../data/theme";

const ListLink = styled(Link)`
  text-decoration: none;
`;

export default function PoksoDrawerMenuItem({ text, onClick }) {
  return (
    <ListItem key={text} disablePadding style={{ padding: 1.5 }}>
      <ListLink to="#" onClick={onClick}>
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
      </ListLink>
    </ListItem>
  );
}
