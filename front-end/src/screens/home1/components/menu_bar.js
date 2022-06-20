import React from "react";
import styled from "styled-components";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import useWindowDimensions from "../../../components/getWindowDimensions";

const View = styled.div`
  width: 720px;
  display: flex;
  justify-content: start;
  align-items: end;
  padding: 0px 0px;
  margin-left: 40px;
  margin: 0px 40px;
`;

const MenuButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3px;
  height: 70px;
  margin-left: 30px;
  margin-right: 30px;
  &:hover {
    border-bottom: 3px white solid;
    margin-bottom: 0px;
  }
`;

const MenuText = styled.div`
  display: felx;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 25px;
  color: ${({ theme }) => theme.color.menu};
  margin-bottom: 18px;
  padding: 0px -10px;
  margin: 18px -5px;
  text-decoration: none;
  white-space: nowrap;
`;

export default function MenuBar() {
  const width = useWindowDimensions().width;

  return (
    <View>
      <MenuButton style={width < 280 ? { display: "none" } : {}}>
        <MenuText href="#">메뉴1</MenuText>
      </MenuButton>
      <MenuButton style={width < 395 ? { display: "none" } : {}}>
        <MenuText href="#">메뉴2</MenuText>
      </MenuButton>
      <MenuButton style={width < 510 ? { display: "none" } : {}}>
        <MenuText href="#">메뉴3</MenuText>
      </MenuButton>
      <MenuButton style={width < 630 ? { display: "none" } : {}}>
        <MenuText href="#">메뉴4</MenuText>
      </MenuButton>
      <MenuButton style={width < 640 ? { display: "none" } : {}}>
        <MenuText href="#">메뉴5</MenuText>
      </MenuButton>
      <MenuButton style={{ marginRight: 0 }}>
        <PopupState variant="popover" popupId="demo-popup-menu">
          {(popupState) => (
            <div style={width >= 640 ? { display: "none" } : {}}>
              <MenuText
                href="#"
                style={{ width: 70 }}
                {...bindTrigger(popupState)}
              >
                더보기
              </MenuText>
              <Menu {...bindMenu(popupState)}>
                <MenuItem
                  style={width < 395 ? {} : { display: "none" }}
                  onClick={() => {
                    popupState.close();
                  }}
                >
                  메뉴2
                </MenuItem>
                <MenuItem
                  style={width < 510 ? {} : { display: "none" }}
                  onClick={() => {
                    popupState.close();
                  }}
                >
                  메뉴3
                </MenuItem>
                <MenuItem
                  style={width < 630 ? {} : { display: "none" }}
                  onClick={() => {
                    popupState.close();
                  }}
                >
                  메뉴4
                </MenuItem>
                <MenuItem
                  style={width < 640 ? {} : { display: "none" }}
                  onClick={() => {
                    popupState.close();
                  }}
                >
                  메뉴5
                </MenuItem>
              </Menu>
            </div>
          )}
        </PopupState>
      </MenuButton>
    </View>
  );
}
