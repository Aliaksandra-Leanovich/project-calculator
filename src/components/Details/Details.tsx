import React from "react";
import {
  ContainerSc,
  FileBlockSC,
  FileIconSC,
  FileTextSC,
  StyledInputSC,
} from "./style";
import File from "../../assets/file.svg";

export const Details = () => {
  return (
    <ContainerSc>
      <StyledInputSC placeholder="A few words about your project" />
      <FileBlockSC>
        <FileIconSC src={File} />
        <FileTextSC>Attach file</FileTextSC>
      </FileBlockSC>
    </ContainerSc>
  );
};
