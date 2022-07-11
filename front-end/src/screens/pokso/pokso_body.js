import React from "react";
import styled from "styled-components";

const mobile_screen_size = 1100;

const View = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: start;
  width: 1200px;
  margin: 20px 0px;

  @media (max-width: ${mobile_screen_size}px) {
    width: 98%;
  }
`;

export default function PoksoBody({ children }) {
  return <View>{children}</View>;
}
