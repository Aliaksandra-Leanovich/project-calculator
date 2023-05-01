import React, { useState } from "react";
import {
  ButtonSC,
  ContainerSc,
  CountSC,
  NumberSC,
  SpecialistSC,
  TextSc,
} from "./style";

interface IObject {
  [key: string]: number;
}

interface IProps {
  specialists: number;
  setSpecialists: (specialists: number) => void;
}

export const Specialists = ({ specialists, setSpecialists }: IProps) => {
  const [state, setState] = useState<IObject>({
    ba: 0,
    designer: 0,
    frontend: 0,
    backend: 0,
    pm: 0,
    qa: 0,
    devops: 0,
    html: 0,
    machine: 0,
  });

  const handlePlus = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setState({
      ...state,
      [event.currentTarget.name]: state[event.currentTarget.name] + 1,
    });

    setSpecialists((specialists = specialists + 5000));
  };

  const handleMinus = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (state[event.currentTarget.name]) {
      setState({
        ...state,
        [event.currentTarget.name]: state[event.currentTarget.name] - 1,
      });
    }
    if (specialists !== 0) {
      setSpecialists((specialists = specialists - 5000));
    }
  };

  const { ba, designer, frontend, backend, pm, qa, devops, html, machine } =
    state;

  return (
    <ContainerSc>
      <SpecialistSC>
        <CountSC>
          <ButtonSC name="ba" onClick={handleMinus}>
            -
          </ButtonSC>
          <NumberSC>{ba}</NumberSC>
          <ButtonSC name="ba" onClick={handlePlus}>
            +
          </ButtonSC>
        </CountSC>
        <TextSc>Business Analyst</TextSc>
      </SpecialistSC>
      <SpecialistSC>
        <CountSC>
          <ButtonSC name="designer" onClick={handleMinus}>
            -
          </ButtonSC>
          <NumberSC>{designer}</NumberSC>
          <ButtonSC name="designer" onClick={handlePlus}>
            +
          </ButtonSC>
        </CountSC>
        <TextSc>UX/UI Designer</TextSc>
      </SpecialistSC>
      <SpecialistSC>
        <CountSC>
          <ButtonSC name="frontend" onClick={handleMinus}>
            -
          </ButtonSC>
          <NumberSC>{frontend}</NumberSC>
          <ButtonSC name="frontend" onClick={handlePlus}>
            +
          </ButtonSC>
        </CountSC>
        <TextSc>Front-end Developer</TextSc>
      </SpecialistSC>
      <SpecialistSC>
        <CountSC>
          <ButtonSC name="backend" onClick={handleMinus}>
            -
          </ButtonSC>
          <NumberSC>{backend}</NumberSC>
          <ButtonSC name="backend" onClick={handlePlus}>
            +
          </ButtonSC>
        </CountSC>
        <TextSc>Back-end Developer</TextSc>
      </SpecialistSC>
      <SpecialistSC>
        <CountSC>
          <ButtonSC name="pm" onClick={handleMinus}>
            -
          </ButtonSC>
          <NumberSC>{pm}</NumberSC>
          <ButtonSC name="pm" onClick={handlePlus}>
            +
          </ButtonSC>
        </CountSC>
        <TextSc>Project Manager</TextSc>
      </SpecialistSC>
      <SpecialistSC>
        <CountSC>
          <ButtonSC name="qa" onClick={handleMinus}>
            -
          </ButtonSC>
          <NumberSC>{qa}</NumberSC>
          <ButtonSC name="qa" onClick={handlePlus}>
            +
          </ButtonSC>
        </CountSC>
        <TextSc>QA Specialist</TextSc>
      </SpecialistSC>
      <SpecialistSC>
        <CountSC>
          <ButtonSC name="devops" onClick={handleMinus}>
            -
          </ButtonSC>
          <NumberSC>{devops}</NumberSC>
          <ButtonSC name="devops" onClick={handlePlus}>
            +
          </ButtonSC>
        </CountSC>
        <TextSc>DevOps (deployment, hosting)</TextSc>
      </SpecialistSC>
      <SpecialistSC>
        <CountSC>
          <ButtonSC name="html" onClick={handleMinus}>
            -
          </ButtonSC>
          <NumberSC>{html}</NumberSC>
          <ButtonSC name="html" onClick={handlePlus}>
            +
          </ButtonSC>
        </CountSC>
        <TextSc>HTML/CSS Developer</TextSc>
      </SpecialistSC>
      <SpecialistSC>
        <CountSC>
          <ButtonSC name="machine" onClick={handleMinus}>
            -
          </ButtonSC>
          <NumberSC>{machine}</NumberSC>
          <ButtonSC name="machine" onClick={handlePlus}>
            +
          </ButtonSC>
        </CountSC>
        <TextSc>Machine Learning Engineer</TextSc>
      </SpecialistSC>
    </ContainerSc>
  );
};
