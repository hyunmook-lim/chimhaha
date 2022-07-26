import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Header, MenuBar, Footer } from "./components";
import { PoksoDrawer, PoksoBody, ContentContainer } from "./pokso";

const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ContentView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 94%;
`;

const ContentHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-self: start;
  width: 100%;
  border-bottom: 1px solid gray;
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.size.title_text}px;
  font-weight: bold;
  margin: 10px 20px;
`;

const WriterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin: 10px 20px;
`;

const WriterTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const WriterName = styled.div`
  font-size: ${({ theme }) => theme.size.normal_text}px;
  color: black;
`;

const WriteTime = styled.div`
  font-size: ${({ theme }) => theme.size.normal_text}px;
  color: gray;
`;

const WriterPicture = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background-color: blue;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 20px 0px;
`;

export default function PoksoContent() {
  return (
    <View>
      <Header />
      <MenuBar pokso={true} />
      <PoksoBody>
        <PoksoDrawer />
        <ContentContainer>
          <ContentView>
            <ContentHeader>
              <Title>제목</Title>
              <WriterContainer>
                <WriterPicture />
                <WriterTextContainer>
                  <WriterName>육정수</WriterName>
                  <WriteTime>2019.12.12 14:43 &nbsp;&nbsp; 조회 43</WriteTime>
                </WriterTextContainer>
              </WriterContainer>
            </ContentHeader>
            <MainContent>{}</MainContent>
          </ContentView>
        </ContentContainer>
      </PoksoBody>
      <Footer />
    </View>
  );
}
