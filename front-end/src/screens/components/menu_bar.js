import React from "react";
import styled from "styled-components";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import useWindowDimensions from "../../utils/getWindowDimensions";
import { Link } from "react-router-dom";

const View = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  align-self: start;
  width: 100%;
  background-color: ${({ theme }) => theme.color.background_header};
`;

const Container = styled.div`
  width: 720px;
  display: flex;
  justify-content: start;
  align-items: end;
  padding: 0px 0px;
  margin-left: 4vw;
`;

const MenuButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3px;
  height: 70px;
  margin-left: 25px;
  margin-right: 25px;
`;

const MenuText = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: ${({ theme }) => theme.size.menu_bar}px;
  text-align: center;
  color: ${({ theme }) => theme.color.menu};
  margin-bottom: 18px;
  padding: 0px -10px;
  margin: 18px -5px;
  text-decoration: none;
  white-space: nowrap;
  font-weight: bold;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                supported by Chrome, Edge, Opera and Firefox */
  &:hover {
    opacity: 0.2;
  }
`;

export default function MenuBar({ home, pokso }) {
  const width = useWindowDimensions().width;

  return (
    <View>
      <Container>
        {/* {홈 이동 } */}
        <MenuButton
          style={
            home ? { borderBottom: "3px white solid", marginBottom: 0 } : {}
          }
        >
          <MenuText to="/">Home</MenuText>
        </MenuButton>
        <MenuButton
          style={
            width < 360
              ? { display: "none" }
              : {
                  borderBottom: pokso ? "3px white solid" : "",
                  marginBottom: pokso ? 0 : 3,
                }
          }
        >
          {/* 폭소게시판 이동 */}
          <MenuText to="/pokso">폭소게시판</MenuText>
        </MenuButton>
        <MenuButton style={width < 440 ? { display: "none" } : {}}>
          {/* 메뉴1 이동 */}
          <MenuText to="#">메뉴1</MenuText>
        </MenuButton>
        <MenuButton style={width < 440 ? { display: "none" } : {}}>
          {/* 메뉴2 이동 */}
          <MenuText to="#">메뉴2</MenuText>
        </MenuButton>
        {/* width 줄어들시 더보기 메뉴 바 생성 */}
        <MenuButton style={{ marginRight: 0 }}>
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <div style={width >= 440 ? { display: "none" } : {}}>
                <MenuText
                  to="#"
                  style={{ width: 70 }}
                  {...bindTrigger(popupState)}
                >
                  더보기
                </MenuText>
                <Menu {...bindMenu(popupState)} style={{ marginTop: 25 }}>
                  <MenuItem
                    style={
                      width < 360
                        ? { fontFamily: "다이어리체" }
                        : { display: "none" }
                    }
                    onClick={() => {
                      popupState.close();
                    }}
                  >
                    폭소게시판
                  </MenuItem>
                  <MenuItem
                    style={
                      width < 440
                        ? { fontFamily: "다이어리체" }
                        : { display: "none" }
                    }
                    onClick={() => {
                      popupState.close();
                    }}
                  >
                    메뉴1
                  </MenuItem>
                  <MenuItem
                    style={
                      width < 440
                        ? { fontFamily: "다이어리체" }
                        : { display: "none" }
                    }
                    onClick={() => {
                      popupState.close();
                    }}
                  >
                    메뉴2
                  </MenuItem>
                </Menu>
              </div>
            )}
          </PopupState>
        </MenuButton>
      </Container>
    </View>
  );
}
