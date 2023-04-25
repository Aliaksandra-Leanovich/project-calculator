import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
import { Progresses } from "./Progresses";
import { ContainerSC } from "./style";

export const ProjectStage = () => {
  const [value, setValue] = useState("idea");
  const [disabled, setDisabled] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  React.useEffect(() => {
    if (value === "progress") {
      setDisabled(true);
    }
    console.log(value, disabled);
  }, [disabled, value]);
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
            control={<Radio />}
            label="I have only idea"
          />
          <FormControlLabel
            value="mockups"
            control={<Radio />}
            label="I have only mockups / specification"
          />
          <FormControlLabel
            value="progress"
            control={<Radio />}
            label="Project is in progress"
          />
          <Progresses />
          <FormControlLabel
            value="dont"
            control={<Radio />}
            label="I don’t know"
          />
        </RadioGroup>
      </FormControl>
    </ContainerSC>
  );
};
