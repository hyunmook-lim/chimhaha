import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Header, MenuBar, Footer } from "../components";
import { PoksoDrawer, PoksoBody, ContentContainer, PoksoList } from "./pokso";

const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export default function PoksoBoard() {
  const { pokso_page_num } = useSelector((state: any) => {
    return {
      pokso_page_num: state.pokso_page_num,
    };
  });

  return (
    <View>
      <Header />
      <MenuBar pokso={true} />
      <PoksoBody>
        <PoksoDrawer />
        <ContentContainer>
          <PoksoList page={pokso_page_num} />
        </ContentContainer>
      </PoksoBody>
      <Footer />
    </View>
  );
}
