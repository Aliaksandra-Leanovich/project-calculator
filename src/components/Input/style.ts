import styled from "@emotion/styled";

export const StyledInputSC = styled.input`
  font-size: 16px;
  padding: 12px 32px 8px 10px;
  width: 100%;
  border-bottom: 2px solid white;
  background: transparent;
  color: #fff;

  &:focus {
    outline: none;
  }

  &::placeholder {
    opacity: 0.4;
  }
`;

export const ContainerSC = styled.div`
  flex-direction: column;
  row-gap: 16px;
`;
