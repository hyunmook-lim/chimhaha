import React from "react";
import { ThemeProvider } from "styled-components";
import {
  Home,
  Login,
  Signup,
  MyInfo,
  PoksoBoard,
  PoksoContent,
  PoksoContentEdit,
  FreeBoard,
  FreeContent,
  FreeContentEdit,
} from "./screens";
import theme from "./data/theme";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const View = styled.div`
  display: flex;
  width: 100vw;
  align-items: center;
`;

export default function App() {
  return (
    <View>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            {/* 홈화면 screen */}
            <Route path="/" element={<Home />} />
            {/* 로그인 screen */}
            <Route path="/login/*" element={<Login />} />
            {/* 회원가입 screen */}
            <Route path="/signup/*" element={<Signup />} />
            {/* 내 정보 확인 */}
            <Route path="/my-info" element={<MyInfo />} />

            {/* 폭소게시판 screen */}
            <Route path="/pokso-board" element={<PoksoBoard />} />
            {/* 폭소게시판 게시물 screen */}
            <Route path="/pokso-board/:no" element={<PoksoContent />} />
            {/* 폭소게시판 게시물 편집 screen */}
            <Route
              path="/pokso-board/board-edit"
              element={<PoksoContentEdit />}
            />

            {/* 자유게시판 screen */}
            <Route path="/free-board" element={<FreeBoard />} />
            {/* 자유게시판 게시물 screen */}
            <Route path="/free-board/:no" element={<FreeContent />} />
            {/* 자유게시판 게시물 편집 screen */}
            <Route
              path="/free-board/board-edit"
              element={<FreeContentEdit />}
            />

            {/* 사전에 정의하지 않은 주소 입력시 */}
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </View>
  );
}
