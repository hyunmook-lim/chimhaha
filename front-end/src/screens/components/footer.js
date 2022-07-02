import React from "react";
import styled from "styled-components";

const View = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.color.background_footer};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
`;

const Container = styled.h1`
  position: absolute;
  opacity: 0.3;
  font-size: 80px;
  color: ${({ theme }) => theme.color.header_title};
`;

export default function Footer() {
  return (
    <View>
      <Container>Footer</Container>
    </View>
  );
}
