import React from "react";
import styled from "styled-components";
import { List } from "@mui/material";
import PoksoDrawerMenuItem from "../components/pokso_drawer_menu_item";

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

export default function PoksoDrawer({
  clickPokso1,
  clickPokso2,
  clickPokso3,
  clickPokso4,
}) {
  return (
    <View>
      <List>
        <Divider />

        <PoksoDrawerMenuItem text={`폭소1`} onClick={clickPokso1} />
        <PoksoDrawerMenuItem text={`폭소2`} onClick={clickPokso2} />
        <PoksoDrawerMenuItem text={`폭소3`} onClick={clickPokso3} />
        <PoksoDrawerMenuItem text={`폭소4`} onClick={clickPokso4} />
        <Divider />
        <PoksoDrawerMenuItem text={`폭소5`} />
        <PoksoDrawerMenuItem text={`폭소6`} />
        <PoksoDrawerMenuItem text={`폭소7`} />
        <PoksoDrawerMenuItem text={`폭소8`} />

        <Divider />
      </List>
    </View>
  );
}
