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

export default function MenuBar({ home, pokso, free }) {
  const width = useWindowDimensions().width;
  const dispatch = useDispatch();
  const { login_info } = useSelector((state) => {
    return { login_info: state.login_info };
  });

  return (
    <ViewContainer>
      <View>
        <Container>
          {/* {??? ?????? } */}
          <MenuButton
            style={
              home ? { borderBottom: "3px black solid", marginBottom: 0 } : {}
            }
          >
            <MenuText to="/">Home</MenuText>
          </MenuButton>
          {/* ??????????????? ?????? */}
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
            <MenuText to="/pokso-board">???????????????</MenuText>
          </MenuButton>
          {/* ?????? ????????? ?????? */}
          <MenuButton
            style={
              width < 440
                ? { display: "none" }
                : {
                    borderBottom: free ? "3px black solid" : "",
                    marginBottom: free ? 0 : 3,
                  }
            }
          >
            <MenuText to="/free-board">?????? ?????????</MenuText>
          </MenuButton>

          {/* width ???????????? ????????? ?????? ??? ?????? */}
          <MenuButton style={{ marginRight: 0 }}>
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <div style={width >= 440 ? { display: "none" } : {}}>
                  <MenuText
                    to="#"
                    style={{ width: 70 }}
                    {...bindTrigger(popupState)}
                  >
                    ?????????
                  </MenuText>
                  <Menu {...bindMenu(popupState)} style={{ marginTop: 25 }}>
                    <MenuItem
                      style={
                        width < 360
                          ? { fontFamily: "???????????????" }
                          : { display: "none" }
                      }
                      onClick={() => {
                        popupState.close();
                      }}
                    >
                      ???????????????
                    </MenuItem>
                    <MenuItem
                      style={
                        width < 440
                          ? { fontFamily: "???????????????" }
                          : { display: "none" }
                      }
                      onClick={() => {
                        popupState.close();
                      }}
                    >
                      ?????? ?????????
                    </MenuItem>
                  </Menu>
                </div>
              )}
            </PopupState>
          </MenuButton>
        </Container>
        {login_info.logined ? (
          <LoginButtonContainer>
            <LoginButton to="/my-info" style={{ marginRight: 12 }}>
              ?????????
            </LoginButton>
            <LoginButton
              to="#"
              style={{ marginLeft: 12 }}
              onClick={() => {
                dispatch(LoginAction({ logined: false }));
              }}
            >
              ????????????
            </LoginButton>
          </LoginButtonContainer>
        ) : (
          <LoginButtonContainer>
            <LoginButton to="/login">?????????</LoginButton>
          </LoginButtonContainer>
        )}
      </View>
    </ViewContainer>
  );
}
