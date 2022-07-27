import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Header, MenuBar, Footer } from "./components";

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

  @media (max-width: ${({ theme }) => theme.size.mobile_screen_width}px) {
    width: 94%;
  }
`;

const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EmailInput = styled.input`
  width: 200px;
  height: 25px;
  font-size: ${({ theme }) => theme.size.normal_text}px;
`;

export default function MyInfo() {
  const { login_info } = useSelector((state) => {
    return { login_info: state.login_info };
  });

  return (
    <View>
      <Header />
      <MenuBar />
      <Container>
        <EmailContainer>
          제목
          <EmailInput disabled={true} value={login_info.email} />
        </EmailContainer>
      </Container>
      <Footer />
    </View>
  );
}
