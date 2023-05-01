import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";
import { ContainerSC, StyledInputSC } from "./style";

export const ProjectType = () => {
  const formControlLabelStyle = {
    "& .MuiFormControlLabel-label": {
      fontFamily: "Montserrat",
      fontWeight: "500",
      fontSize: "22px",
      lineHeight: "175%",
      letterSpacing: "-0.005em",
      color: " #222529",
    },
  };

  return (
    <ContainerSC>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                "& .MuiSvgIcon-root": {
                  color: "#C5C7C9",
                },
              }}
            />
          }
          label="E-Commerce"
          sx={{ formControlLabelStyle }}
        />
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                "& .MuiSvgIcon-root": {
                  color: "#C5C7C9",
                },
              }}
            />
          }
          label="E-Commerce"
          sx={{ formControlLabelStyle }}
        />
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                "& .MuiSvgIcon-root": {
                  color: "#C5C7C9",
                },
              }}
            />
          }
          label="E-Learnong"
          sx={{ formControlLabelStyle }}
        />
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                "& .MuiSvgIcon-root": {
                  color: "#C5C7C9",
                },
              }}
            />
          }
          label="Fintech"
          sx={{ formControlLabelStyle }}
        />
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                "& .MuiSvgIcon-root": {
                  color: "#C5C7C9",
                },
              }}
            />
          }
          label="Communication Platform"
          sx={{ formControlLabelStyle }}
        />
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                "& .MuiSvgIcon-root": {
                  color: "#C5C7C9",
                },
              }}
            />
          }
          label="Blockchain Technology"
          sx={{ formControlLabelStyle }}
        />
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                "& .MuiSvgIcon-root": {
                  color: "#C5C7C9",
                },
              }}
            />
          }
          label="Machine Learning"
          sx={{ formControlLabelStyle }}
        />
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                "& .MuiSvgIcon-root": {
                  color: "#C5C7C9",
                },
              }}
            />
          }
          label="Other"
          sx={{ formControlLabelStyle }}
        />
        <StyledInputSC placeholder="Or paste an URL to some similar app" />
      </FormGroup>
    </ContainerSC>
  );
};
