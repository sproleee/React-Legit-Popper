import styled, { keyframes, css } from "styled-components";

import { renderPositioning, renderButtonPosition } from "../utils/styling";

const fadeIn = keyframes`
  0% { opacity: 0; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

const fadeOut = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 0; }
`;

export const Container = styled.div`
  position: fixed;
  border: 1px solid #d6d6d6;
  z-index: 9999;
  text-align: center;
  padding: ${props => props.padding};
  background: ${props => props.bgColor};
  color: ${props => props.textColor};
  border-width: ${props => props.borderWidth};
  border-color: ${props => props.borderColor};
  border-radius: ${props => props.borderRadius};
  width: ${props => (props.fullWidth ? "calc(100% - 30px)" : props.width)};,
  box-shadow: ${props => (props.boxShadow ? "0 2px 3px 0 #0000000f" : "none")};
  opacity:${props => (props.fadeOut ? 0 : 1)};
  animation: ${props =>
    props.fadeOut
      ? css`
          ${fadeOut} 0.5s linear forwards
        `
      : css`
          ${fadeIn} 0.5s linear forwards
        `};
 ${({ position }) => renderPositioning(position)}
`;

export const Content = styled.div`
  overflow-y: scroll;
  max-height: 80vh;
`;

export const CloseButton = styled.div`
  position: absolute;
  background-color: #fff;
  line-height: 0;
  padding: 3px;
  cursor: pointer;
  ${({ closeButtonPosition }) => renderButtonPosition(closeButtonPosition)}
`;

export const CloseImage = styled.img`
  width: 8px;
`;
