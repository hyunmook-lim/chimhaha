import React from "react";
import styled from "styled-components";
import { Header, MenuBar, Footer } from "./components/";
import { PoksoDrawer, PoksoBody, ContentContainer } from "./pokso/";

const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export default function PoksoContent() {
  return (
    <View>
      <Header />
      <MenuBar pokso={true} />
      <PoksoBody>
        <ContentContainer></ContentContainer>
      </PoksoBody>
      <Footer />
    </View>
  );
}
