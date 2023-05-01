import styled from "@emotion/styled";

export const ContainerSc = styled.div`
  background: #f5f6f6;
  padding: 52px 60px 80px;
  display: flex;
  align-items: center;
  column-gap: 66px;
`;

export const FileBlockSC = styled.div`
  display: flex;
  align-items: center;
  column-gap: 14px;
`;

export const FileTextSC = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  letter-spacing: -0.01em;

  color: #616366;
`;

export const FileIconSC = styled.img`
  height: 16px;
`;

export const StyledInputSC = styled.input`
  font-weight: 500;
  font-size: 16px;
  line-height: 175%;
  /* identical to box height, or 28px */

  letter-spacing: -0.005em;

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
