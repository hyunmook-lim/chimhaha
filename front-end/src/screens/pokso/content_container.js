import React from "react";
import styled from "styled-components";

const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-conetent: start;
  width: 100%;
  border-left: grey solid 1px;
  border-right: grey solid 1px;
  margin: 8px;
  padding: 5px;
  min-height: 500px;
`;

export default function ContentContainer({ children }) {
  return <View>{children}</View>;
}
