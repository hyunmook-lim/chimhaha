import React from "react";
import styled, { keyframes } from "styled-components";
import TopMenuBar from "./components/top_menu_bar";
import useWindowDimensions from "../../components/getWindowDimensions";

const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.color.background_header};
`;

const moveTitle = keyframes`
  0% {
    left: -10vw;
  }
  50% {
    left: 10vw;
  }

  100% {
    left: -10vw
  }
`;

const spinTitle = keyframes`
  from {
  transform: rotate(0deg);
  }
  to {
  transform: rotate(360deg);
  }
`;

const TitleContainer = styled.div`
  position: relative;
  color: ${({ theme }) => theme.color.title};
  animation: ${moveTitle} 15s infinite linear;
  margin: 30px 0px;
`;

const Title = styled.div`
  color: ${({ theme }) => theme.color.title};
  font-size: 60px;
  font-weight: 800;
  text-decoration: none;
  animation: ${spinTitle} 7s infinite linear;
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
