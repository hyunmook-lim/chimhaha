import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export default function Pokso1({ match }) {
  const test_list = [1, 2, 3, 4, 5];
  return (
    <View>
      <h1>폭소게시판 1</h1>
      <h1>text</h1>
      <h1>text</h1>
      <h1>text</h1>
      {test_list.map((text, index) => (
        <Link
          id={text}
          key={text}
          to={`/pokso/${text}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          {`Link To Content ${text}`}
        </Link>
      ))}
    </View>
  );
}
