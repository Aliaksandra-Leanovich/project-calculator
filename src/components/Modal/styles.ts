import styled from "@emotion/styled";
import { IStylesProps } from "./types";

export const WrapperSC = styled.div<IStylesProps>`
  display: ${({ show }) => (show ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.42), rgba(0, 0, 0, 0.42));
  z-index: 4;
`;

export const ContainerSC = styled.div<IStylesProps>`
  position: fixed;
  background-color: white;
  padding: 30px 40px;
  width: 100%;
  align-self: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  max-width: 700px;
  overflow-y: scroll;
`;

export const ContainerButtonSC = styled.div`
  align-self: flex-end;
`;

export const ButtonSC = styled.button<IStylesProps>`
  width: 20px;
  cursor: pointer;

  svg {
    path {
      fill: #808080;
    }
  }

  &:hover {
    svg {
      path {
        fill: #6295f1;
      }
    }
  }
`;

export const ContainerChildSC = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleSC = styled.p`
  font-weight: 800;
  font-size: 20px;
  line-height: 175%;

  letter-spacing: -0.01em;
  margin-bottom: 16px;
  color: #222529;
`;

export const ResultSc = styled.p`
  font-weight: 800;
  font-size: 17px;
  line-height: 175%;
  letter-spacing: 0.01em;

  margin-bottom: 38px;
  color: #808080;
`;

export const DescriptionSC = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 160.5%;
  /* or 22px */

  letter-spacing: 0.005em;
  margin-bottom: 32px;
  color: #000000;
`;

export const StyledInputSC = styled.input`
  font-weight: 500;
  font-size: 16px;
  line-height: 175%;
  /* identical to box height, or 28px */

  letter-spacing: -0.005em;
  margin-bottom: 56px;
  color: #3f454c;
  padding: 12px 32px 8px 10px;
  width: 76%;
  border-bottom: 2px solid #c5c7c9;
  background: transparent;
  color: #fff;

  &:focus {
    outline: none;
  }
`;

export const ButtonSendSC = styled.button`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.015em;
  padding: 14px 50px;
  background: #6295f1;
  color: #ffffff;
  align-self: flex-start;
`;

export const SpanSC = styled.span`
  font-weight: 800;
  font-size: 17px;
  line-height: 175%;

  letter-spacing: 0.01em;

  color: #6295f1;
`;
