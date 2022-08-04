import React from "react";
import styled from "styled-components";
import HomeBody from "./home/home_body";
import { Header, MenuBar, Footer } from "./components";

const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export default function Home() {
  return (
    <View>
      <Header />
      <MenuBar home={true} />
      <HomeBody />
      <Footer />
    </View>
  );
}
