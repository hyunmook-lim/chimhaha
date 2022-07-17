import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const title_width = 460;
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

export default function Pokso5() {
  const test_list = [1, 2, 3, 4, 5];
  return (
    <View>
      <List>
        <ListTitle>폭소5</ListTitle>
        <ListHeader>
          <ListHeaderTitle>제목</ListHeaderTitle>
          <ListHeaderName>작성자</ListHeaderName>
          <ListHeaderDate>작성일</ListHeaderDate>
          <ListHeaderView>조회</ListHeaderView>
          <ListHeaderLike>좋아요</ListHeaderLike>
        </ListHeader>
        {test_list.map((text, index) => (
          <ListItemContainer>
            <ListItemTitle id={text} key={text} to={`/pokso/${text}`}>
              {`Link To Content ${text}`}
            </ListItemTitle>
            <ListItemName to="#">육정수</ListItemName>
            <ListItemDate>2022.07.17</ListItemDate>
            <ListItemView>12</ListItemView>
            <ListItemLike>2</ListItemLike>
          </ListItemContainer>
        ))}
      </List>
    </View>
  );
}
