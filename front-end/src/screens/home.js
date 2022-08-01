import React, { useState } from "react";
import styled from "styled-components";
import HomeBody from "./home/home_body";
import { Header, MenuBar, Footer } from "./components";
import axios from "axios";

const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Button = styled.button`
  width: 120px;
  height: 60px;
  background-color: gray;
  color: white;
  border: none;
  font-size: 46px;
  font-weight: bold;
  border-radius: 10px;
`;

export default function Home() {
  const [info, setInfo] = useState([]);
  function _click() {
    fetch(
      axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
        setInfo(res.data);
      })
    );
  }

  return (
    <View>
      <Header />
      <Button onClick={_click}>Test</Button>
      {info.map((text) => {
        return (
          <div
            style={{
              border: "black solid 1px",
              margin: 5,
            }}
          >
            <p>{text.title}</p>
            <p>{text.body}</p>
          </div>
        );
      })}
      <MenuBar home={true} />
      <HomeBody />
      <Footer />
    </View>
  );
}
