import React, { useState, useEffect } from "react";
import styled from "styled-components";
// @ts-ignore
import { CKEditor } from "@ckeditor/ckeditor5-react";
// @ts-ignore
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { MenuBar, Footer, Header } from "../components";
import PoksoBody from "./pokso/pokso_body";
import PoksoDrawer from "./pokso/pokso_drawer";
import ContentContainer from "./pokso/content_container";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./pokso/pokso_board_edit.css";
import HTMLParse from "../utils/get_html_parse";

const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  width: 90%;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const SaveButtonContainer = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 35px;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.color.background_button};
  color: ${({ theme }) => theme.color.button};
  text-decoration: none;
  margin: 20px 0;
`;

const SaveButton = styled.div`
  font-size: ${({ theme }) => theme.size.normal_text}px;
  text-align: center;
  font-weight: bold;
`;

export default function PoksoContentEdit() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  function _clickSaveButton() {
    navigate("/free-board");
  }

  useEffect(() => {
    console.log(HTMLParse(content));
  }, [content]);

  return (
    <View>
      <Header />
      <MenuBar pokso={true} />
      <PoksoBody>
        <PoksoDrawer />
        <ContentContainer>
          <TitleContainer>
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="제목"
              variant="outlined"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </TitleContainer>
          <CKEditor
            config={{
              placeholder: "글을 입력해보세요!",
            }}
            editor={ClassicEditor}
            onReady={(editor: any) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!");
            }}
            onChange={(event: any, editor: any) => {
              const data = editor.getData();
              setContent(data);
            }}
            onBlur={(event: any, editor: any) => {
              console.log("Blur");
            }}
            onFocus={(event: any, editor: any) => {
              console.log("Focus");
            }}
          />
          <SaveButtonContainer href="#" onClick={_clickSaveButton}>
            <SaveButton>저장</SaveButton>
          </SaveButtonContainer>
        </ContentContainer>
      </PoksoBody>
      <Footer />
    </View>
  );
}
