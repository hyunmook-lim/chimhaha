import React from "react";
import { ThemeProvider } from "styled-components";
import { Home, Pokso, Pokso1, Pokso2, Pokso3 } from "./screens";
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
            <Route path="/" element={<Home />} />
            <Route path="/pokso/*" element={<Pokso />} />
            <Route path="/pokso/1/*" element={<Pokso1 />} />
            <Route path="/pokso/2/*" element={<Pokso2 />} />
            <Route path="/pokso/3/*" element={<Pokso3 />} />
            {/* 사전에 정의하지 않은 주소 입력시 */}
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </View>
  );
}
