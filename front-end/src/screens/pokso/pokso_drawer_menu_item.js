import React from "react";
import { ListItem } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ListLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.normal_text};
  font-size: ${({ theme }) => theme.size.drawer_text}px;
  margin: 12px 0px;
`;

export default function PoksoDrawerMenuItem({ text, onClick, to }) {
  return (
    <ListItem key={text} style={{ padding: 1.5, justifyContent: "center" }}>
      <ListLink to={to} onClick={onClick}>
        {text}
      </ListLink>
    </ListItem>
  );
}
