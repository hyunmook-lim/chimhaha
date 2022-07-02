import React from "react";
import styled from "styled-components";
import { Header, MenuBar, Footer } from "./components";
import PoksoDrawer from "./pokso/pokso_drawer";

const mobile_screen_size = 1250;

const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const PoksoBody = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: start;
  width: 1200px;
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
    white-space: nowrap;
  }
`;

export default function Pokso1() {
  return (
    <View>
      <Header />
      <MenuBar pokso={true} />
      <PoksoBody>
        <PoksoDrawer />

        <ContentWrap>
          <h1>폭소게시판 1</h1>
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
      <Footer />
    </View>
  );
}
