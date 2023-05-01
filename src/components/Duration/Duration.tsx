import { Slider } from "@mui/material";
import React, { useState } from "react";
import { ContainerSc } from "./style";
const marks = [
  {
    value: 1,
    label: "1 month",
  },
  {
    value: 6,
    label: "6 months",
  },
  {
    value: 12,
    label: "1 year",
  },
  {
    value: 18,
    label: "1.5 year",
  },
  {
    value: 24,
    label: "2 years",
  },
];

interface IProps {
  setDuration: (specialists: number) => void;
}

export const Duration = ({ setDuration }: IProps) => {
  const [value, setValue] = useState(4);

  const changeValue = (event: any, value: any) => {
    setValue(value);
    setDuration(value);
  };

  return (
    <ContainerSc>
      <Slider
        max={24}
        onChange={changeValue}
        aria-label="Always visible"
        value={value}
        valueLabelFormat={(value) => <div>{value} months</div>}
        valueLabelDisplay="on"
        step={1}
        marks={marks}
      />
    </ContainerSc>
  );
};
