import React from "react";
import styled from "styled-components";
import { Header, MenuBar, Footer } from "./components";

const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.size.screen_width}px;
  height: 500px;
  background-color: ${({ theme }) => theme.color.background_content};
  margin: 20px 0px;
  border-radius: 30px;
`;

export default function Signup() {
  return (
    <View>
      <Header />
      <MenuBar />
      <Container></Container>
      <Footer />
    </View>
  );
}
