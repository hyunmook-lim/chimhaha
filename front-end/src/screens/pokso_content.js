import React, { useState } from "react";
import styled from "styled-components";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Header, MenuBar, Footer } from "./components/";
import { PoksoDrawer, PoksoBody, ContentContainer } from "./pokso/";
import "./pokso/pokso_content.css";
import { TextField } from "@mui/material";

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

export default function PoksoContent() {
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
              sx={{ width: "800px" }}
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
          />
        </ContentContainer>
      </PoksoBody>
      <Footer />
    </View>
  );
}
