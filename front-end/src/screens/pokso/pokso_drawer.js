import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import PoksoDrawerMenuItem from "./pokso_drawer_menu_item";
import { PoksoPageNumAction } from "../../redux/actions/pokso_page_action";

const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  margin: 50px 0px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Divider = styled.div`
  display: flex;
  width: 130%;
  height: 1.5px;
  background-color: gray;
  opacity: 0.5;
`;

export default function PoksoDrawer() {
  const dispatch = useDispatch();

  const menu_list1 = [1, 2, 3, 4, 5];
  const menu_list2 = [6, 7, 8, 9, 10];

  return (
    <View>
      <List>
        <Divider />

        {menu_list1.map((text) => {
          return (
            <PoksoDrawerMenuItem
              text={`폭소${text}`}
              to="/pokso-board"
              onClick={() => {
                dispatch(PoksoPageNumAction(text));
              }}
            />
          );
        })}
        <Divider />
        {menu_list2.map((text) => {
          return (
            <PoksoDrawerMenuItem
              text={`폭소${text}`}
              to="/pokso-board"
              onClick={() => {
                dispatch(PoksoPageNumAction(text));
              }}
            />
          );
        })}
        <Divider />
      </List>
    </View>
  );
}
