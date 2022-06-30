import React from "react";
import { ThemeProvider } from "styled-components";
import { Home1, Pokso } from "./screens";
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
            <Route path="/" element={<Home1 />} />
            <Route path="/pokso/*" element={<Pokso />} />
            {/* 사전에 정의하지 않은 주소 입력시 */}
            <Route path="*" element={<Home1 />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </View>
  );
}
