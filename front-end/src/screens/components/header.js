import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../data/images/main_logo.jpeg";

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

const TitleLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export default function Home1Header() {
  return (
    <View>
      <TitleLink to={"/"}>
        <img
          style={{ width: 600, margin: -10 }}
          src={logo}
          alt="chimhaha_main_logo"
        />
      </TitleLink>
    </View>
  );
}
