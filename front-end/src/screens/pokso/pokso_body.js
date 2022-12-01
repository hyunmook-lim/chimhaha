import React from "react";
import styled from "styled-components";

const View = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: start;
  width: ${({ theme }) => theme.size.screen_width}px;
  margin: 20px 0px;

  @media (max-width: ${({ theme }) => theme.size.mobile_screen_width}px) {
    width: 98%;
  }
`;

export default function PoksoBody({ children }) {
  return <View>{children}</View>;
}
