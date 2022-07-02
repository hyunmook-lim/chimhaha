import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.color.background_header};
  padding: 50px 0px;
  padding-bottom: 20px;
`;

const TitleContainer = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  color: ${({ theme }) => theme.color.title};
  font-size: 35px;
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
  return (
    <View>
      <TitleContainer to="/">
        <Title>웃음의</Title>
        <Title>알렉산드리아 도서관</Title>
      </TitleContainer>
    </View>
  );
}
