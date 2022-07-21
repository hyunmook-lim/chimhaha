import React from "react";
import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import theme from "../../data/theme";

const mobile_screen_size = 1200;

const View = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.background_footer};
  justify-content: start;
  align-items: center;
  width: 100%;
  padding: 2% 0%;
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
  color: ${({ theme }) => theme.color.normal_text};
  margin: 10px 20px;
`;

const Divider = styled.div`
  background-color: gray;
  height: 1px;
  width: 1150px;
  margin: 20px 0px;
  @media (max-width: ${mobile_screen_size}px) {
    width: 90%;
  }
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
          <GitHubIcon style={{ color: theme.color.normal_text }} />
        </a>
      </TextContainer>
    </View>
  );
}
