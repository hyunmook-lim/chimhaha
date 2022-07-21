import React from "react";
import { ThemeProvider } from "styled-components";
import { Home, Login, Pokso, PoksoContent, Signup } from "./screens";
import theme from "./data/theme";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import axios from "axios"; // 백엔드와 프론트엔드 사이에서 통신을 쉽게 할 수 있도록 도와주는 라이브러리

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
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
            <Route path="/signup/*" element={<Signup />} />
            <Route path="/pokso" element={<Pokso />} />
            <Route path="/pokso/:no" element={<PoksoContent />} />
            {/* 사전에 정의하지 않은 주소 입력시 */}
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </View>
  );
}
