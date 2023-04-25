import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";

export const Progresses = () => {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox />} label="Label" />
    </FormGroup>
  );
};
