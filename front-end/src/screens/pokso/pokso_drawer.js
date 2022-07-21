import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { List } from "@mui/material";
import PoksoDrawerMenuItem from "../components/pokso_drawer_menu_item";
import { PoksoPageNumAction } from "../../redux/actions/pokso_page_action";

const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 190px;
  margin: 50px 1px;
`;

const Divider = styled.div`
  display: flex;
  width: 100%;
  height: 1.5px;
  background-color: white;
  opacity: 0.3;
`;

export default function PoksoDrawer() {
  const dispatch = useDispatch();

  return (
    <View>
      <List>
        <Divider />

        <PoksoDrawerMenuItem
          text={`폭소1`}
          to="/pokso"
          onClick={() => {
            dispatch(PoksoPageNumAction(1));
          }}
        />
        <PoksoDrawerMenuItem
          text={`폭소2`}
          to="/pokso"
          onClick={() => {
            dispatch(PoksoPageNumAction(2));
          }}
        />
        <PoksoDrawerMenuItem
          text={`폭소3`}
          to="/pokso"
          onClick={() => {
            dispatch(PoksoPageNumAction(3));
          }}
        />
        <PoksoDrawerMenuItem
          text={`폭소4`}
          to="/pokso"
          onClick={() => {
            dispatch(PoksoPageNumAction(4));
          }}
        />
        <Divider />
        <PoksoDrawerMenuItem
          to="/pokso"
          text={`폭소5`}
          onClick={() => {
            dispatch(PoksoPageNumAction(5));
          }}
        />
        <PoksoDrawerMenuItem to="/pokso" text={`폭소6`} />
        <PoksoDrawerMenuItem to="/pokso" text={`폭소7`} />
        <PoksoDrawerMenuItem to="/pokso" text={`폭소8`} />

        <Divider />
      </List>
    </View>
  );
}
