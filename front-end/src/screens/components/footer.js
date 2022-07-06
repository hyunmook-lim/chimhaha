import React from "react";
import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";

const View = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.background_footer};
  justify-content: start;
  align-items: center;
  width: 100%;
  padding: 2% 2%;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: cetner;
`;

const Text = styled.div`
  font-size: 15px;
  font-weight: 300;
  color: white;
  margin: 10px 20px;
`;

const Divider = styled.div`
  background-color: gray;
  height: 1px;
  width: 65%;
  margin: 20px 0px;
`;

export default function Footer() {
  return (
    <View>
      <TextContainer>
        <Text>made by codepam2020 & hyunmook-lim</Text>
      </TextContainer>
      <TextContainer>
        <Text>불편한 점 있으시면 codepam2020@gmail.com 으로 문의주세요</Text>
      </TextContainer>
      <Divider />
      <TextContainer>
        <a
          href="https://github.com/codepam2020"
          style={{ textDecoration: "none" }}
        >
          <GitHubIcon style={{ color: "white" }} />
        </a>
      </TextContainer>
    </View>
  );
}
