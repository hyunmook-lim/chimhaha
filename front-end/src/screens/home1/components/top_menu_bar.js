import React from "react";
import styled from "styled-components";

const View = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  margin: 10px 10px;
  margin-right: 50px;
`;

const ContentWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-right: 50px;
`;

const Text = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 12px;
  color: white;
  text-decoration: none;
`;

export default function TopMenuBar() {
  return (
    <View>
      <ContentWrap>
        <Text href="#">즐겨찾기에 추가</Text>
      </ContentWrap>
      <ContentWrap>
        <Text href="#">시작페이지로</Text>
      </ContentWrap>
    </View>
  );
}
