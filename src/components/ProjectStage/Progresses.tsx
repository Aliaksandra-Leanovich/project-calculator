import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React, { useState } from "react";

export interface IProps {
  disabled: boolean;
  stage: number;
  setStage: (stage: number) => void;
}

export const Progresses = ({ disabled, stage, setStage }: IProps) => {
  const [state, setState] = useState({
    ba: false,
    designer: false,
    frontend: false,
    backend: false,
    pm: false,
    qa: false,
    devops: false,
    html: false,
    machine: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
    let temp = 0;
    for (const [key, value] of Object.entries(state)) {
      if (value) {
        temp = temp + 2000;
      }
    }
    setStage(temp);
  };

  const { ba, designer, frontend, backend, pm, qa, devops, html, machine } =
    state;

  return (
    <FormGroup sx={{ padding: "10px 40px" }}>
      <FormControlLabel
        control={
          <Checkbox
            name="ba"
            checked={ba}
            disabled={disabled}
            onChange={handleChange}
            sx={{
              "& .MuiSvgIcon-root": {
                color: "#C5C7C9",
              },
            }}
          />
        }
        label="I need Business Analysis"
      />
      <FormControlLabel
        control={
          <Checkbox
            name="designer"
            checked={designer}
            disabled={disabled}
            onChange={handleChange}
            sx={{
              "& .MuiSvgIcon-root": {
                color: "#C5C7C9",
              },
            }}
          />
        }
        label=" I need design"
      />
      <FormControlLabel
        control={
          <Checkbox
            name="frontend"
            checked={frontend}
            disabled={disabled}
            onChange={handleChange}
            sx={{
              "& .MuiSvgIcon-root": {
                color: "#C5C7C9",
              },
            }}
          />
        }
        label=" I need frontend"
      />
      <FormControlLabel
        control={
          <Checkbox
            name="backend"
            checked={backend}
            disabled={disabled}
            onChange={handleChange}
            sx={{
              "& .MuiSvgIcon-root": {
                color: "#C5C7C9",
              },
            }}
          />
        }
        label="I need backend "
      />
      <FormControlLabel
        control={
          <Checkbox
            name="pm"
            checked={pm}
            disabled={disabled}
            onChange={handleChange}
            sx={{
              "& .MuiSvgIcon-root": {
                color: "#C5C7C9",
              },
            }}
          />
        }
        label=" I need Project Management"
      />
      <FormControlLabel
        control={
          <Checkbox
            name="qa"
            checked={qa}
            disabled={disabled}
            onChange={handleChange}
            sx={{
              "& .MuiSvgIcon-root": {
                color: "#C5C7C9",
              },
            }}
          />
        }
        label="I need QA "
      />
      <FormControlLabel
        control={
          <Checkbox
            name="devops"
            checked={devops}
            disabled={disabled}
            onChange={handleChange}
            sx={{
              "& .MuiSvgIcon-root": {
                color: "#C5C7C9",
              },
            }}
          />
        }
        label="I need DevOps (deployment, hosting) "
      />
      <FormControlLabel
        control={
          <Checkbox
            name="html"
            checked={html}
            disabled={disabled}
            onChange={handleChange}
            sx={{
              "& .MuiSvgIcon-root": {
                color: "#C5C7C9",
              },
            }}
          />
        }
        label="I need HTML/CSS "
      />
      <FormControlLabel
        control={
          <Checkbox
            name="machine"
            checked={machine}
            disabled={disabled}
            onChange={handleChange}
            sx={{
              "& .MuiSvgIcon-root": {
                color: "#C5C7C9",
              },
            }}
          />
        }
        label="I need Machine Learning "
      />
    </FormGroup>
  );
};
