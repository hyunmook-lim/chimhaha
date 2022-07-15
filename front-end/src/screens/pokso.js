import React, { useState } from "react";
import styled from "styled-components";
import { Header, MenuBar, Footer } from "./components";
import {
  PoksoDrawer,
  PoksoBody,
  ContentContainer,
  Pokso1,
  Pokso2,
  Pokso3,
} from "./pokso/";

const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export default function Pokso() {
  const [poksoPage, setPoksoPage] = useState(<Pokso1 />);
  return (
    <View>
      <Header />
      <MenuBar pokso={true} />
      <PoksoBody>
        <PoksoDrawer
          clickPokso1={() => {
            setPoksoPage(<Pokso1 />);
          }}
          clickPokso2={() => {
            setPoksoPage(<Pokso2 />);
          }}
          clickPokso3={() => {
            setPoksoPage(<Pokso3 />);
          }}
        />
        <ContentContainer children={poksoPage} />
      </PoksoBody>
      <Footer />
    </View>
  );
}
