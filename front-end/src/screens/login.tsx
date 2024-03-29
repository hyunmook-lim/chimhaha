import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { Header, MenuBar, Footer } from "../components";
import theme from "../data/theme";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { LoginAction } from "../redux/actions/login_action";

const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  background-color: ${({ theme }) => theme.color.background_content};
  height: 600px;
  border-radius: 15px;
  margin: 20px 15px;
  }
`;

const SelectButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  background-color: ${({ theme }) => theme.color.background_login};
  border-radius: 15px 15px 0 0;
`;

const SelectButton = styled(Link)`
  display: flex;
  width: 100%;
  border-radius: 15px 15px 0 0;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${({ theme }) => theme.color.normal_text};
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

export default function Login() {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupNickname, setSignupNickname] = useState("");
  const [signupEmail, setSignupEmail] = useState("");

  const navigate = useNavigate();

  // 로그인 버튼 클릭
  function loginButtonClick() {
    dispatch(
      LoginAction({
        logined: true,
        email: loginEmail,
        password: "password",
        name: "yook",
        nickname: "yoooook",
        gender: "male",
        birthday: "960221",
      })
    );
    navigate("/");
  }

  return (
    <View>
      <Header />
      <MenuBar />

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
        {isLogin ? (
          <LoginSignupContainer>
            <TextField
              sx={{
                marginTop: 5,
                marginBottom: 3,
                width: 250,
                "& .MuiOutlinedInput-root": {
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "black",
                    borderWidth: 1.5,
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: theme.color.text_field_color,
                  },
                },
              }}
              id="outlined-basic"
              label="이메일"
              variant="outlined"
              autoFocus={true}
              onChange={(e) => {
                setLoginEmail(e.target.value);
              }}
              value={loginEmail}
            />
            <TextField
              sx={{
                marginTop: 3,
                marginBottom: 3,
                width: 250,
                "& .MuiOutlinedInput-root": {
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "black",
                    borderWidth: 1.5,
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: theme.color.text_field_color,
                  },
                },
              }}
              id="outlined-password"
              type="password"
              label="비밀번호"
              variant="outlined"
              onChange={(e) => {
                setLoginPassword(e.target.value);
              }}
              value={loginPassword}
            />

            <Button
              sx={{
                width: 80,
                marginTop: 3,
                marginBottom: 5,
                textDecoration: "none",
                color: "black",
                borderColor: "black",
                borderWidth: 1.5,
              }}
              variant="outlined"
              onClick={loginButtonClick}
            >
              로그인
            </Button>
          </LoginSignupContainer>
        ) : (
          <LoginSignupContainer>
            <TextField
              sx={{
                marginTop: 5,
                marginBottom: 3,
                width: 250,
                "& .MuiOutlinedInput-root": {
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "black",
                    borderWidth: 1.5,
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: theme.color.text_field_color,
                  },
                },
              }}
              id="outlined-basic"
              label="닉네임"
              variant="outlined"
              onChange={(e) => {
                setSignupNickname(e.target.value);
              }}
              value={signupNickname}
            />
            <TextField
              sx={{
                marginTop: 3,
                marginBottom: 3,
                width: 250,
                "& .MuiOutlinedInput-root": {
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "black",
                    borderWidth: 1.5,
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: theme.color.text_field_color,
                  },
                },
              }}
              id="outlined-basic"
              label="이메일"
              variant="outlined"
              onChange={(e) => {
                setSignupEmail(e.target.value);
              }}
              value={signupEmail}
            />

            <Link
              to={"/signup"}
              state={{ signupEmail, signupNickname }}
              style={{ textDecoration: "none" }}
            >
              <Button
                sx={{
                  width: 80,
                  marginTop: 3,
                  marginBottom: 5,
                  color: "black",
                  borderColor: "black",
                  borderWidth: 1.5,
                }}
                variant="outlined"
              >
                가입
              </Button>
            </Link>
          </LoginSignupContainer>
        )}
      </LoginContainer>
      <Footer />
    </View>
  );
}
