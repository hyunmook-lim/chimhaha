import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Header, MenuBar, Footer } from "./components";
import theme from "../data/theme";
import TextField from "@mui/material/TextField";

const mobile_screen_size = 1100;

const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  flex;direction: column;
  justify-content: center;
  grid-template-columns: 650px 480px;
  margin: 20px 0px;
`;

const Content = styled.div`
  display: flex;
  display-direction: column;
  align-items: center;
  justify-content: center;
  height: 500px;
  @media (max-width: ${mobile_screen_size}px) {
    margin: 12px 5px;
  }
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.background_content};
  height: 500px;
  border-radius: 15px;
  margin: 20px 15px;
  }
`;

const SelectButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  background-color: ${({ theme }) => theme.color.background_login};
  border-radius: 15px 15px 0px 0px;
`;

const SelectButton = styled(Link)`
  display: flex;
  width: 100%;
  border-radius: 15px 15px 0 0;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: white;
  font-size: ${({ theme }) => theme.size.normal_text}px;
`;

// 로그인 및 회원가입 콘테이너
const LoginSignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const LoginId = styled.div``;

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <View>
      <Header />
      <MenuBar />
      <Grid>
        <Content>
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png"
            style={{ width: 300 }}
          />
        </Content>
        <LoginContainer>
          <SelectButtonContainer>
            <SelectButton
              to="#"
              onClick={() => {
                setIsLogin(true);
              }}
              style={{
                backgroundColor: isLogin
                  ? theme.color.background_content
                  : theme.color.background_login,
              }}
            >
              로그인
            </SelectButton>
            <SelectButton
              to="#"
              onClick={() => {
                setIsLogin(false);
              }}
              style={{
                backgroundColor: isLogin
                  ? theme.color.background_login
                  : theme.color.background_content,
              }}
            >
              회원가입
            </SelectButton>
          </SelectButtonContainer>
          <LoginSignupContainer>
            <TextField
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                  "&. Mui-hover": {
                    borderColor: "white",
                  },
                  "& .MuiOutlinedInput-input": {
                    color: "white",
                    borderColor: "white",
                  },
                  "&:hover fieldset": { borderColor: "white" },
                  "&.Mui-focused fieldset": { borderColor: "skyblue" },
                },
                label: { color: "white" },
              }}
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </LoginSignupContainer>
        </LoginContainer>
      </Grid>
      <Footer />
    </View>
  );
}
