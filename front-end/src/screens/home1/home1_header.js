import React from "react";
import styled, { keyframes } from "styled-components";
import TopMenuBar from "./components/top_menu_bar";
import useWindowDimensions from "../../utils/getWindowDimensions";

const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.color.background_header};
`;

const TitleContainer = styled.div`
  position: relative;
  color: ${({ theme }) => theme.color.title};
  margin: 20px 0px;
`;

const Title = styled.div`
  color: ${({ theme }) => theme.color.title};
  font-size: 50px;
  font-weight: 800;
  text-decoration: none;
  // 텍스트 선택 안되게함
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                supported by Chrome, Edge, Opera and Firefox */
`;

export default function Home1Header() {
  const width = useWindowDimensions().width;
  return (
    <View>
      <TopMenuBar />
      <TitleContainer>
        <Title href="#">{width}</Title>
      </TitleContainer>
    </View>
  );
}
