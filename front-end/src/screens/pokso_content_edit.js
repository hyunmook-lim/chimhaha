import React, { useState } from "react";
import styled from "styled-components";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { MenuBar, Footer, Header } from "./components";
import PoksoBody from "./pokso/pokso_body";
import PoksoDrawer from "./pokso/pokso_drawer";
import ContentContainer from "./pokso/content_container";
import { TextField } from "@mui/material";
import "./pokso/pokso_board_edit.css";

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
  align-itmes: center;
  justify-content: start;
  width: 90%;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export default function PoksoContentEdit() {
  const [title, setTitle] = useState("");

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
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!");
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log(data);
            }}
            onBlur={(event, editor) => {
              console.log("Blur");
            }}
            onFocus={(event, editor) => {
              console.log("Focus");
            }}
            data="123"
          />
        </ContentContainer>
      </PoksoBody>
      <Footer />
    </View>
  );
}
