import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import theme from "../data/theme";
import Button from "@mui/material";
import { Header, MenuBar, Footer } from "./components";

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
  height: 500px;
  margin: 20px 0px;
`;

export default function Signup() {
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
              "&.Mui-focused fieldset": {
                borderColor: "skyblue",
              },
            },
            label: { color: "white" },
          }}
          id="outlined-basic"
          label="이메일"
          variant="outlined"
          value={"alsue2000@gmail.com"}
          disabled={true}
        />
      </Container>
      <Footer />
    </View>
  );
}
