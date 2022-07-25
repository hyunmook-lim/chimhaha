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

export default function Home1Header() {
  return (
    <View>
      <Link to={"/"}>
        <img
          style={{ width: 600, margin: -10 }}
          src="./images/main_logo.jpeg"
          alt="chimhaha_main_logo"
        />
      </Link>
    </View>
  );
}
