import React from "react";
import styled from "styled-components";

const mobile_screen_size = 1200;

const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ContentWrap = styled.div`
  display: grid;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-template-columns: 620px 620px;
  margin-top: 10px;
  @media (max-width: ${mobile_screen_size}px) {
    grid-template-columns: 90vw;
  }
`;

const Content = styled.div`
  background-color: ${({ theme }) => theme.color.background_content};
  height: 100px;
  border-radius: 30px;
  margin: 20px 15px;
  @media (max-width: ${mobile_screen_size}px) {
    margin: 12px 5px;
  }

  }
`;

export default function Home1Body() {
  return (
    <View>
      <ContentWrap>
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
      </ContentWrap>
    </View>
  );
}
