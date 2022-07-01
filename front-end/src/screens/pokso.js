import React from "react";
import styled from "styled-components";
import { Home1Footer, Home1Header } from "./home1/";
import MenuBar from "./home1/components/menu_bar";
import PoksoDrawer from "./pokso/pokso_drawer";

const mobile_screen_size = 1200;

const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
`;

const PoksoBody = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: start;
  width: 1250px;
  margin: 20px;

  @media (max-width: ${mobile_screen_size}px) {
    width: 98%;
  }
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-conetent: start;
  width: 100%;
  border-left: grey solid 1px;
  border-right: grey solid 1px;
  margin: 8px;
  padding: 5px;

  h1 {
    color: white;
  }
`;

export default function Pokso() {
  return (
    <View>
      <Home1Header />
      <MenuBarWrap>
        <MenuBar pokso={true} />
      </MenuBarWrap>
      <PoksoBody>
        <PoksoDrawer />
        <ContentWrap>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
        </ContentWrap>
      </PoksoBody>
      <Home1Footer />
    </View>
  );
}
