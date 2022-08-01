import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Header, MenuBar, Footer } from "./components";
import axios from "axios";

const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: ${({ theme }) => theme.size.screen_width}px;
  margin: 20px 0px;

  @media (max-width: ${({ theme }) => theme.size.mobile_screen_width}px) {
    width: 94%;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  margin: 10px 0px;
`;

const ItemText = styled.div`
  font-size: ${({ theme }) => theme.size.normal_text}px
  color: black;
  margin-right: 10px;
  width: 80px;
  text-align: center;
`;

const ItemInput = styled.input`
  width: 180px;
  height: 25px;
  font-size: ${({ theme }) => theme.size.normal_text}px;
  margin-left: 10px;
`;

export default function MyInfo() {
  const { login_info } = useSelector((state) => {
    return { login_info: state.login_info };
  });

  const [test, setTest] = useState("");
  useEffect(() => {
    async function fetchTest() {
      try {
        const response = await axios
          .get("http://localhost:8080/api/members/1")
          .then(setTest(response.data));
      } catch (e) {
        console.log(e);
      }
    }
    fetchTest();
  });

  console.log(test);

  return (
    <View>
      <Header />
      <MenuBar />
      <Container>
        <ItemContainer>
          <ItemText>이메일</ItemText>
          <ItemInput disabled={true} value={login_info.email} />
        </ItemContainer>
        <ItemContainer>
          <ItemText>이름</ItemText>
          <ItemInput disabled={true} value={login_info.birthday} />
        </ItemContainer>
        <ItemContainer>
          <ItemText>닉네임</ItemText>
          <ItemInput disabled={true} value={login_info.nickname} />
        </ItemContainer>
        <ItemContainer>
          <ItemText>생년월일</ItemText>
          <ItemInput disabled={true} value={login_info.birthday} />
        </ItemContainer>
        <ItemContainer>
          <ItemText>성별</ItemText>
          <ItemInput disabled={true} value={login_info.gender} />
        </ItemContainer>
      </Container>
      <Footer />
    </View>
  );
}
