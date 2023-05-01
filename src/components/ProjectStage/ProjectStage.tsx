import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useEffect, useState } from "react";
import { Progresses } from "./Progresses";
import { ContainerSC } from "./style";

interface IStage {
  stage: number;
  setStage: (stage: number) => void;
}

export const ProjectStage = ({ stage, setStage }: IStage) => {
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

  const [value, setValue] = useState("idea");
  const [disabled, setDisabled] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  useEffect(() => {
    if (value === "progress") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [value]);

  return (
    <ContainerSC>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="idea"
            control={
              <Radio
                sx={{
                  "& .MuiSvgIcon-root": {
                    color: "#C5C7C9",
                  },
                }}
              />
            }
            label="I have only idea"
            sx={{ formControlLabelStyle }}
          />
          <FormControlLabel
            value="mockups"
            control={
              <Radio
                sx={{
                  "& .MuiSvgIcon-root": {
                    color: "#C5C7C9",
                  },
                }}
              />
            }
            label="I have only mockups / specification"
          />
          <FormControlLabel
            value="progress"
            control={
              <Radio
                sx={{
                  "& .MuiSvgIcon-root": {
                    color: "#C5C7C9",
                  },
                }}
              />
            }
            label="Project is in progress"
          />
          <Progresses disabled={disabled} stage={stage} setStage={setStage} />
          <FormControlLabel
            value="dont"
            control={
              <Radio
                sx={{
                  "& .MuiSvgIcon-root": {
                    color: "#C5C7C9",
                  },
                }}
              />
            }
            label="I don’t know"
          />
        </RadioGroup>
      </FormControl>
    </ContainerSC>
  );
};
