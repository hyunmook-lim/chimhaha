import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { Header, MenuBar, Footer } from "../components";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.size.screen_width}px;
  margin: 20px 0;
`;

let year_list: Array<number> = [];
let month_list: Array<number> = [];
let day_list: Array<number> = [];

for (let i = 1900; i <= 2023; i++) {
  year_list.push(i);
}

for (let i = 1; i <= 12; i++) {
  month_list.push(i);
}

for (let i = 1; i <= 31; i++) {
  day_list.push(i);
}

export default function Signup() {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [gender, setGender] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    setEmail(location.state.signupEmail);
    setNickname(location.state.signupNickname);
  }, [location.state.signupEmail, location.state.signupNickname]);

  function _joinButtonClick() {
    navigate("/");
  }

  return (
    <View>
      <Header />
      <MenuBar />
      <Container>
        <TextField
          sx={{
            marginTop: 5,
            marginBottom: 3,
            width: 250,
          }}
          id="outlined-basic"
          label="이메일"
          variant="outlined"
          value={email}
          disabled={true}
        />
        <TextField
          sx={{
            marginTop: 3,
            marginBottom: 3,
            width: 250,
          }}
          id="outlined-basic"
          label="닉네임"
          variant="outlined"
          value={nickname}
          disabled={true}
        />
        <TextField
          sx={{
            marginTop: 3,
            marginBottom: 3,
            width: 250,
          }}
          id="outlined-basic"
          label="비밀번호"
          variant="outlined"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <TextField
          sx={{
            marginTop: 3,
            marginBottom: 3,
            width: 250,
          }}
          id="outlined-basic"
          label="비밀번호 확인"
          variant="outlined"
          value={passwordConfirm}
          onChange={(e) => {
            setPasswordConfirm(e.target.value);
          }}
        />
        <FormControl sx={{ width: 250, marginTop: 3, marginBottom: 3 }}>
          <InputLabel id="demo-simple-select-label">성별</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={gender}
            label="성별"
            onChange={(e) => {
              setGender(e.target.value);
            }}
          >
            <MenuItem value={10}>남성</MenuItem>
            <MenuItem value={20}>여성</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: 250, marginTop: 3, marginBottom: 3 }}>
          <InputLabel id="demo-simple-select-label">출생 연도</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={birthYear}
            label="출생 연도"
            onChange={(e) => {
              setBirthYear(e.target.value);
            }}
          >
            {year_list.map((text) => {
              return <MenuItem value={text}>{text}</MenuItem>;
            })}
          </Select>
        </FormControl>
        <FormControl sx={{ width: 250, marginTop: 3, marginBottom: 3 }}>
          <InputLabel id="demo-simple-select-label">출생 월</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={birthMonth}
            label="출생 월"
            onChange={(e) => {
              setBirthMonth(e.target.value);
            }}
          >
            {month_list.map((text) => {
              return <MenuItem value={text}>{text}</MenuItem>;
            })}
          </Select>
        </FormControl>
        <FormControl sx={{ width: 250, marginTop: 3, marginBottom: 3 }}>
          <InputLabel id="demo-simple-select-label">출생 일</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={birthDay}
            label="출생 일"
            onChange={(e) => {
              setBirthDay(e.target.value);
            }}
          >
            {day_list.map((text) => {
              return <MenuItem value={text}>{text}</MenuItem>;
            })}
          </Select>
        </FormControl>
        <Button
          sx={{
            width: 100,
            marginTop: 3,
            marginBottom: 5,
            color: "black",
            borderColor: "lightgray",
            borderWidth: 1.5,
          }}
          variant="outlined"
          onClick={_joinButtonClick}
        >
          가입하기
        </Button>
      </Container>
      <Footer />
    </View>
  );
}
