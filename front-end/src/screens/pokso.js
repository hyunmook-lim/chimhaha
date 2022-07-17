import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Header, MenuBar, Footer } from "./components";
import {
  PoksoDrawer,
  PoksoBody,
  ContentContainer,
  Pokso1,
  Pokso2,
  Pokso3,
  Pokso4,
  Pokso5,
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
  const { pokso_page_num } = useSelector((state) => {
    return {
      pokso_page_num: state.pokso_page_num,
    };
  });
  console.log(pokso_page_num);

  useEffect(() => {
    if (pokso_page_num === 1) {
      setPoksoPage(<Pokso1 />);
    }
    if (pokso_page_num === 2) {
      setPoksoPage(<Pokso2 />);
    }
    if (pokso_page_num === 3) {
      setPoksoPage(<Pokso3 />);
    }
    if (pokso_page_num === 4) {
      setPoksoPage(<Pokso4 />);
    }
    if (pokso_page_num === 5) {
      setPoksoPage(<Pokso5 />);
    }
  }, [pokso_page_num]);

  return (
    <View>
      <Header />
      <MenuBar pokso={true} />
      <PoksoBody>
        <PoksoDrawer />
        <ContentContainer children={poksoPage} />
      </PoksoBody>
      <Footer />
    </View>
  );
}
