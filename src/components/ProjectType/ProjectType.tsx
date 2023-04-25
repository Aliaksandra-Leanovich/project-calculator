import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";
import { ContainerSC } from "./style";

export const ProjectType = () => {
  return (
    <ContainerSC>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Label" />
        <FormControlLabel control={<Checkbox />} label="Label" />
        <FormControlLabel control={<Checkbox />} label="Label" />
        <FormControlLabel control={<Checkbox />} label="Label" />
        <FormControlLabel control={<Checkbox />} label="Label" />
        <FormControlLabel control={<Checkbox />} label="Label" />
      </FormGroup>
    </ContainerSC>
  );
};
