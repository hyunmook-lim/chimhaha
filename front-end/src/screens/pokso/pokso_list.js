import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const title_width = 530;
const name_width = 120;
const date_width = 82;
const view_width = 70;
const like_width = 70;

const View = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100%;
`;

const List = styled.table`
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
`;

const ListTitle = styled.th`
  color: ${({ theme }) => theme.color.normal_text};
  font-size: ${({ theme }) => theme.size.title_text}px;
  margin-bottom: 20px;
`;

const ListHeader = styled.tr`
  display: flex;
  flex-direction: row;
  border-bottom: 3px solid ${({ theme }) => theme.color.grid};
  border-top: 5px double ${({ theme }) => theme.color.grid};
  padding: 12px 20px;
  align-items: center;
`;

const ListHeaderTitle = styled.div`
  color: ${({ theme }) => theme.color.normal_text};
  font-size: ${({ theme }) => theme.size.normal_text}px;
  font-weight: bold;
  width: ${title_width}px;
  text-align: center;
`;

const ListHeaderName = styled.div`
  color: ${({ theme }) => theme.color.normal_text};
  font-size: ${({ theme }) => theme.size.normal_text}px;
  font-weight: bold;
  width: ${name_width}px;
  text-align: start;
  padding-left: 5px;
`;

const ListHeaderDate = styled.div`
  color: ${({ theme }) => theme.color.normal_text};
  font-size: ${({ theme }) => theme.size.normal_text}px;
  font-weight: bold;
  width: ${date_width}px;
  text-align: center;
`;

const ListHeaderView = styled.div`
  color: ${({ theme }) => theme.color.normal_text};
  font-size: ${({ theme }) => theme.size.normal_text}px;
  font-weight: bold;
  width: ${view_width}px;
  text-align: center;
`;

const ListHeaderLike = styled.div`
  color: ${({ theme }) => theme.color.normal_text};
  font-size: ${({ theme }) => theme.size.normal_text}px;
  font-weight: bold;
  width: ${like_width}px;
  text-align: center;
`;

const ListItemContainer = styled.tr`
  display: flex;
  flex-direction: row;
  border-bottom: 0.6px solid ${({ theme }) => theme.color.grid};
  padding: 10px 20px;
  align-items: center;
`;

const ListItemTitle = styled(Link)`
  color: ${({ theme }) => theme.color.normal_text};
  font-size: ${({ theme }) => theme.size.normal_text}px;
  text-decoration: none;
  width: ${title_width}px;
  text-align: start;
`;

const ListItemName = styled(Link)`
  color: ${({ theme }) => theme.color.normal_text};
  font-size: ${({ theme }) => theme.size.normal_text}px;
  text-decoration: none;
  width: ${name_width}px;
  text-align: start;
  padding-left: 5px;
`;

const ListItemDate = styled.div`
  color: ${({ theme }) => theme.color.normal_text};
  font-size: ${({ theme }) => theme.size.normal_text}px;
  width: ${date_width}px;
  text-align: center;
`;

const ListItemView = styled.div`
  color: ${({ theme }) => theme.color.normal_text};
  font-size: ${({ theme }) => theme.size.normal_text}px;
  width: ${view_width}px;
  text-align: center;
`;

const ListItemLike = styled.div`
  color: ${({ theme }) => theme.color.normal_text};
  font-size: ${({ theme }) => theme.size.normal_text}px;
  width: ${like_width}px;
  text-align: center;
`;

const ListTopContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 12px 20px;
  justify-content: space-between;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const SearchInput = styled.input`
  width: 200px;
  height: 30px;
`;

const SearchButton = styled(Link)`
  text-decoration: none;
  background-color: ${({ theme }) => theme.color.background_button};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SearchButtonItem = styled.div`
  width: 48px;
  color: black;
  text-align: center;
  vertical-align: center;
  border: none;
`;

const MakeContentButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 36px;
  color: black;
  margin-right: 40px;
  align-items: center;
  border: 0.5px solid black;
  border-radius: 4px;
  text-decoration: none;
`;

const MakeContentButtonItem = styled.div`
  background: none;
  font-size: ${({ theme }) => theme.size.normal_text}px;
`;

export default function PoksoList({ page }) {
  var test_list = [];

  for (let i = 1; i <= 30; i++) {
    test_list.push(i);
  }

  return (
    <View>
      <List>
        <ListTitle>{page} 게시판</ListTitle>
        <ListTopContainer>
          <SearchContainer>
            <SearchInput placeholder="검색어를 입력하세요" />
            <SearchButton to="#">
              <SearchButtonItem>검색</SearchButtonItem>
            </SearchButton>
          </SearchContainer>
          <MakeContentButton to={"board-edit"}>
            <MakeContentButtonItem>글쓰기</MakeContentButtonItem>
          </MakeContentButton>
        </ListTopContainer>
        <ListHeader>
          <ListHeaderTitle>제목</ListHeaderTitle>
          <ListHeaderName>작성자</ListHeaderName>
          <ListHeaderDate>작성일</ListHeaderDate>
          <ListHeaderView>조회</ListHeaderView>
          <ListHeaderLike>좋아요</ListHeaderLike>
        </ListHeader>
        {test_list.map((text) => (
          <ListItemContainer key={`${text}_container`}>
            <ListItemTitle key={`${text}_title`} to={`${text}`}>
              {`Link To Content ${text}`}
            </ListItemTitle>
            <ListItemName key={`${text}_name`} to="#">
              육정수
            </ListItemName>
            <ListItemDate key={`${text}_date`}>2022.07.{text}</ListItemDate>
            <ListItemView key={`${text}_view`}>12</ListItemView>
            <ListItemLike key={`${text}_like`}>{2}</ListItemLike>
          </ListItemContainer>
        ))}
      </List>
    </View>
  );
}
