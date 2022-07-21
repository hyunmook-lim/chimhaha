import React from "react";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "../../data/theme";

const ListLink = styled(Link)`
  text-decoration: none;
`;

export default function PoksoDrawerMenuItem({ text, onClick, to }) {
  return (
    <ListItem key={text} disablePadding style={{ padding: 1.5 }}>
      <ListLink to={to} onClick={onClick}>
        <ListItemButton
          style={{ textDecoration: "none" }}
          sx={{
            borderRadius: 3,
          }}
        >
          <ListItemText
            primaryTypographyProps={{
              fontSize: theme.size.drawer_text,
              color: theme.color.normal_text,
              textDecoration: "none",
            }}
            style={{ textDecoration: "none" }}
            primary={text}
          ></ListItemText>
        </ListItemButton>
      </ListLink>
    </ListItem>
  );
}
