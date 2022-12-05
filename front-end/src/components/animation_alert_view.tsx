import React from "react";
import styled, {keyframes} from "styled-components";

const Animation = keyframes`
  from {
    top: -4rem;
  } to {
      top: 1.5rem;
    }
`

const AlertView = styled.div`
  display: flex;
  position: fixed;
  top: 1.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 3rem;
  background-color: black;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.3) 1px 10px 10px;
  animation: ${Animation} infinite 0.3s ease-out;
  animation-iteration-count: 1;
`

const AlertViewText = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: white;
`;

// 상단에 로그인시 내려오는 알람
interface AlertType {
    alertContent: string | boolean,
    isErrMessageShow: string | boolean
}
/**
 *
 * @param alertContent 알람내용 확인
 * @param isShow 알람 화면 보이는지 여부
 * @constructor
 */
export default function AnimationAlertView({ alertContent, isErrMessageShow}: AlertType) {
    return(
        <AlertView style={isErrMessageShow ? { display: "flex" } : { display: "none" }}>
            <AlertViewText>{alertContent}</AlertViewText>
        </AlertView>
    )
}