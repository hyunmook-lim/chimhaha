import React from "react";
import styled from "styled-components";
import { Home1Header } from "./home1/";
import MenuBar from "./home1/components/menu_bar";
import PoxoDrawer from "./pokso/pokso_drawer";

const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  h1 {
    position: absolute;
    color: yellow;
    font-size: 60px;
    opacity: 0.4;
  }
`;

const MenuBarWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  align-self: start;
  width: 100%;
  background-color: ${({ theme }) => theme.color.background_header};
  position: sticky;
  top: 0;
`;

export default function Pokso() {
  return (
    <View>
      <Home1Header />
      <MenuBarWrap>
        <MenuBar pokso={true} />
      </MenuBarWrap>
      <PoxoDrawer />
    </View>
  );
}
