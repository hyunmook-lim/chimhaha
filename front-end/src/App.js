import React from "react";
import { ThemeProvider } from "styled-components";
import { Home1 } from "./screens";
import theme from "./data/theme";
import styled from "styled-components";

const View = styled.div`
  display: flex;
  width: 100vw;
  align-items: center;
`;

export default function App() {
  return (
    <View>
      <ThemeProvider theme={theme}>
        <Home1 />
      </ThemeProvider>
    </View>
  );
}
