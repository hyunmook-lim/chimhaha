import React from "react";
import styled from "styled-components";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Header, MenuBar, Footer } from "./components/";
import { PoksoDrawer, PoksoBody, ContentContainer } from "./pokso/";
import "./pokso/pokso_content.css";

const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export default function PoksoContent() {
  return (
    <View>
      <Header />
      <MenuBar pokso={true} />
      <PoksoBody>
        <PoksoDrawer />
        <ContentContainer>
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
