import React from "react";
import styled from "styled-components";
import { Header, MenuBar, Footer } from "./components";
import { PoksoBody, ContentContainer } from "./pokso";
import FreeList from "./free_board/free_list";

const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export default function FreeBoard() {
  return (
    <View>
      <Header />
      <MenuBar free={true} />
      <PoksoBody>
        <ContentContainer>
          <FreeList />
        </ContentContainer>
      </PoksoBody>
      <Footer />
    </View>
  );
}
