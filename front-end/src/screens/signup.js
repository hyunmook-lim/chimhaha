import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import theme from "../data/theme";
import { Header, MenuBar, Footer } from "./components";
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
  margin: 20px 0px;
`;

export default function Signup() {
  const [gender, setGender] = useState("");

  function genderClick(event) {
    setGender(event.target.value);
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
          value={"alsue2000@gmail.com"}
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
          value={"육초코"}
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
        />
        <FormControl sx={{ width: 250, marginTop: 3, marginBottom: 3 }}>
          <InputLabel id="demo-simple-select-label">성별</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={gender}
            label="성별"
            onChange={genderClick}
          >
            <MenuItem value={10}>남성</MenuItem>
            <MenuItem value={20}>여성</MenuItem>
          </Select>
        </FormControl>
        <Button
          sx={{
            width: 120,
            marginTop: 3,
            marginBottom: 5,
            color: "black",
            borderColor: "lightgray",
            borderWidth: 1.5,
          }}
          variant="outlined"
        >
          가입하기
        </Button>
      </Container>
      <Footer />
    </View>
  );
}
