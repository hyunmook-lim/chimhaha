import React from "react";
import styled from "styled-components";
import { Home1Header, Home1Body, Home1Footer } from "./home1/";
import MenuBar from "./home1/components/menu_bar";

const View = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
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

export default function Home1() {
  return (
    <View>
      <Home1Header />
      <MenuBarWrap>
        <MenuBar />
      </MenuBarWrap>
      <Home1Body />
      <Home1Footer />
    </View>
  );
}
