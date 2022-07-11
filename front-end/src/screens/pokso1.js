import React from "react";
import styled from "styled-components";
import { Header, MenuBar, Footer } from "./components";
import { PoksoDrawer, PoksoBody, ContentContainer } from "./pokso/";

const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export default function Pokso1() {
  return (
    <View>
      <Header />
      <MenuBar pokso={true} />
      <PoksoBody>
        <PoksoDrawer />

        <ContentContainer>
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
        </ContentContainer>
      </PoksoBody>
      <Footer />
    </View>
  );
}
