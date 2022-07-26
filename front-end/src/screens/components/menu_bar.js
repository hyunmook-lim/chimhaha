import React from "react";
import styled from "styled-components";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { useSelector, useDispatch } from "react-redux";
import useWindowDimensions from "../../utils/getWindowDimensions";
import { Link } from "react-router-dom";
import { LoginAction } from "../../redux/actions/login_action";

const ViewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin: 0px;
  padding: 0px;
  background-color: ${({ theme }) => theme.color.background_menubar};
`;

const View = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: start;
  align-self: start;
  width: ${({ theme }) => theme.size.screen_width}px;
`;

const Container = styled.div`
  width: 720px;
  display: flex;
  justify-content: start;
  align-items: end;
  padding: 0px 0px;
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

const LoginButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: center;
  margin-left: auto;
  margin-right: 1.5vw;
`;

const LoginButton = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  font-size: ${({ theme }) => theme.size.normal_text}px;
  color: ${({ theme }) => theme.color.normal_text};
`;

export default function MenuBar({ home, pokso }) {
  const width = useWindowDimensions().width;
  const dispatch = useDispatch();
  const { login_info } = useSelector((state) => {
    return { login_info: state.login_info };
  });

  return (
    <ViewContainer>
      <View>
        <Container>
          {/* {홈 이동 } */}
          <MenuButton
            style={
              home ? { borderBottom: "3px black solid", marginBottom: 0 } : {}
            }
          >
            <MenuText to="/">Home</MenuText>
          </MenuButton>
          <MenuButton
            style={
              width < 360
                ? { display: "none" }
                : {
                    borderBottom: pokso ? "3px black solid" : "",
                    marginBottom: pokso ? 0 : 3,
                  }
            }
          >
            {/* 폭소게시판 이동 */}
            <MenuText to="/pokso-board">폭소게시판</MenuText>
          </MenuButton>
          <MenuButton style={width < 440 ? { display: "none" } : {}}>
            {/* 자유 게시판 이동 */}
            <MenuText to="free-board">자유 게시판</MenuText>
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
                      자유 게시판
                    </MenuItem>
                  </Menu>
                </div>
              )}
            </PopupState>
          </MenuButton>
        </Container>
        {login_info.logined ? (
          <LoginButtonContainer>
            <LoginButton to="/login" style={{ marginRight: 12 }}>
              내정보
            </LoginButton>
            <LoginButton
              to="#"
              style={{ marginLeft: 12 }}
              onClick={() => {
                dispatch(LoginAction({ logined: false }));
              }}
            >
              로그아웃
            </LoginButton>
          </LoginButtonContainer>
        ) : (
          <LoginButtonContainer>
            <LoginButton to="/login">로그인</LoginButton>
          </LoginButtonContainer>
        )}
      </View>
    </ViewContainer>
  );
}
