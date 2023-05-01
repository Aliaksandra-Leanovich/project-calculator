import styled from "@emotion/styled";

export const ContainerSC = styled.div`
  background: #f5f6f6;
  padding: 79px 60px 40px;
`;

export const StyledInputSC = styled.input`
  font-size: 16px;
  padding: 12px 32px 8px 0;
  width: 100%;
  border-bottom: 2px solid #c5c7c9;
  background: transparent;
  color: #fff;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-family: "Montserrat";
    font-weight: 500;
    font-size: 16px;
    line-height: 175%;
    /* identical to box height, or 28px */

    letter-spacing: -0.005em;

    color: #3f454c;
  }
`;
