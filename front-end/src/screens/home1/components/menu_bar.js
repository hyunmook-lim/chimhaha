import React from "react";
import styled from "styled-components";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import useWindowDimensions from "../../../utils/getWindowDimensions";
import { Menu, Dropdown } from "semantic-ui-react";

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
  cursor: default;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                supported by Chrome, Edge, Opera and Firefox */
`;

export default function MenuBar() {
  const width = useWindowDimensions().width;

  // return (
  //   <View>
  //     <MenuButton style={width < 280 ? { display: "none" } : {}}>
  //       <MenuText href="#">메뉴1</MenuText>
  //     </MenuButton>
  //     <MenuButton style={width < 395 ? { display: "none" } : {}}>
  //       <MenuText href="#">메뉴2</MenuText>
  //     </MenuButton>
  //     <MenuButton style={width < 510 ? { display: "none" } : {}}>
  //       <MenuText href="#">메뉴3</MenuText>
  //     </MenuButton>
  //     <MenuButton style={width < 630 ? { display: "none" } : {}}>
  //       <MenuText href="#">메뉴4</MenuText>
  //     </MenuButton>
  //     <MenuButton style={width < 640 ? { display: "none" } : {}}>
  //       <MenuText href="#">메뉴5</MenuText>
  //     </MenuButton>
  //     <MenuButton style={{ marginRight: 0 }}>
  //       <PopupState variant="popover" popupId="demo-popup-menu">
  //         {(popupState) => (
  //           <div style={width >= 640 ? { display: "none" } : {}}>
  //             <MenuText
  //               href="#"
  //               style={{ width: 70 }}
  //               {...bindTrigger(popupState)}
  //             >
  //               더보기
  //             </MenuText>
  //             <Menu {...bindMenu(popupState)}>
  //               <MenuItem
  //                 style={width < 395 ? {} : { display: "none" }}
  //                 onClick={() => {
  //                   popupState.close();
  //                 }}
  //               >
  //                 메뉴2
  //               </MenuItem>
  //               <MenuItem
  //                 style={width < 510 ? {} : { display: "none" }}
  //                 onClick={() => {
  //                   popupState.close();
  //                 }}
  //               >
  //                 메뉴3
  //               </MenuItem>
  //               <MenuItem
  //                 style={width < 630 ? {} : { display: "none" }}
  //                 onClick={() => {
  //                   popupState.close();
  //                 }}
  //               >
  //                 메뉴4
  //               </MenuItem>
  //               <MenuItem
  //                 style={width < 640 ? {} : { display: "none" }}
  //                 onClick={() => {
  //                   popupState.close();
  //                 }}
  //               >
  //                 메뉴5
  //               </MenuItem>
  //             </Menu>
  //           </div>
  //         )}
  //       </PopupState>
  //     </MenuButton>
  //   </View>
  // );

  return (
    <Menu>
      <Menu.Item>Home</Menu.Item>
      <Dropdown text="Shopping" pointing className="link item">
        <Dropdown.Menu>
          <Dropdown.Header>Categories</Dropdown.Header>
          <Dropdown.Item>
            <Dropdown text="Clothing">
              <Dropdown.Menu>
                <Dropdown.Header>Mens</Dropdown.Header>
                <Dropdown.Item>Shirts</Dropdown.Item>
                <Dropdown.Item>Pants</Dropdown.Item>
                <Dropdown.Item>Jeans</Dropdown.Item>
                <Dropdown.Item>Shoes</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header>Womens</Dropdown.Header>
                <Dropdown.Item>Dresses</Dropdown.Item>
                <Dropdown.Item>Shoes</Dropdown.Item>
                <Dropdown.Item>Bags</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Dropdown.Item>
          <Dropdown.Item>Home Goods</Dropdown.Item>
          <Dropdown.Item>Bedroom</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Header>Order</Dropdown.Header>
          <Dropdown.Item>Status</Dropdown.Item>
          <Dropdown.Item>Cancellations</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Menu.Item>Forums</Menu.Item>
      <Menu.Item>Contact Us</Menu.Item>
    </Menu>
  );
}
