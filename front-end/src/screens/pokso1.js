import React from "react";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";
import { Header, MenuBar, Footer } from "./components";
import { PoksoDrawer, PoksoBody, ContentContainer } from "./pokso/";
import PoksoContent from "./pokso_content";

const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export default function Pokso1({ match }) {
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
          <Link
            id={12}
            key={12}
            to={`/pokso/12`}
            style={{ textDecoration: "none", color: "white" }}
          >
            link to content
          </Link>
        </ContentContainer>
      </PoksoBody>
      <Footer />
    </View>
  );
}
