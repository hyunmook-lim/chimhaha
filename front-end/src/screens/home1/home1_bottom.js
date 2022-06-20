import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  position: relative;
  opacity: 0.3;
  font-size: 80px;
  color: ${({ theme }) => theme.color.header_title};
  margin: 10px;
  padding: 0px;
`;

const View = styled.div`
  background-color: ${({ theme }) => theme.color.background_bottom};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 20vh;
  &:hover {
    background-color: ${({ theme }) => theme.color.background_hover_color};
    ${Title} {
      color: blue;
    }
  }
`;

export default function Home1Bottom() {
  return (
    <View>
      <Title>Bottom</Title>
    </View>
  );
}
