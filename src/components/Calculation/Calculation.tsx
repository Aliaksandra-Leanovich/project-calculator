import React, { useEffect, useState } from "react";
import {
  ButtonContainerSC,
  ButtonSC,
  ContainerSC,
  DescriptionSC,
  NumberSC,
  ProjectContainerSC,
  ProjectDecriptionSC,
  ProjectSC,
  ProjectTitleSC,
  TextSC,
  TitleSC,
  WrapperSC,
} from "./style";
import { ProjectType } from "../ProjectType/ProjectType";
import { ProjectStage } from "../ProjectStage/ProjectStage";
import { Specialists } from "../Specialist/Specialists";
import { Details } from "../Details/Details";
import { useShowModal } from "../../hooks/use-show-modal.hook";
import { Modal } from "../Modal/Modal";
import { Duration } from "../Duration/Duration";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";

export const Calculation = () => {
  const { show, showModal } = useShowModal();
  const { budget, setBudget } = useBudgetContext();
  const [specialists, setSpecialists] = useState(0);
  const [stage, setStage] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    setBudget(specialists * duration + stage);
  }, [budget, duration, setBudget, specialists, stage]);

  return (
    <WrapperSC>
      <ContainerSC>
        <TitleSC>Calculate your project</TitleSC>
        <ProjectSC>
          <DescriptionSC>
            <NumberSC>1</NumberSC>
            <TextSC>
              <ProjectTitleSC>Project type</ProjectTitleSC>
              <ProjectDecriptionSC>
                What does your project do?
              </ProjectDecriptionSC>
            </TextSC>
          </DescriptionSC>
          <ProjectContainerSC>
            <ProjectType />
          </ProjectContainerSC>
        </ProjectSC>
        <ProjectSC>
          <DescriptionSC>
            <NumberSC>2</NumberSC>
            <TextSC>
              <ProjectTitleSC>Project stage</ProjectTitleSC>
              <ProjectDecriptionSC>
                What do you already have and what can we do for you?
              </ProjectDecriptionSC>
            </TextSC>
          </DescriptionSC>
          <ProjectContainerSC>
            <ProjectStage stage={stage} setStage={setStage} />
          </ProjectContainerSC>
        </ProjectSC>
        <ProjectSC>
          <DescriptionSC>
            <NumberSC>3</NumberSC>
            <TextSC>
              <ProjectTitleSC>Choose specialists</ProjectTitleSC>
              <ProjectDecriptionSC>
                What specialists do you need?
              </ProjectDecriptionSC>
            </TextSC>
          </DescriptionSC>
          <ProjectContainerSC>
            <Specialists
              specialists={specialists}
              setSpecialists={setSpecialists}
            />
          </ProjectContainerSC>
        </ProjectSC>
        <ProjectSC>
          <DescriptionSC>
            <NumberSC>4</NumberSC>
            <TextSC>
              <ProjectTitleSC>Project duration</ProjectTitleSC>
              <ProjectDecriptionSC>
                Do you have any deadline?
              </ProjectDecriptionSC>
            </TextSC>
          </DescriptionSC>
          <ProjectContainerSC>
            <Duration setDuration={setDuration} />
          </ProjectContainerSC>
        </ProjectSC>
        <ProjectSC>
          <DescriptionSC>
            <NumberSC>5</NumberSC>
            <TextSC>
              <ProjectTitleSC>Project duration</ProjectTitleSC>
              <ProjectDecriptionSC>
                Do you have any deadline?
              </ProjectDecriptionSC>
            </TextSC>
          </DescriptionSC>
          <ProjectContainerSC>
            <Details />
          </ProjectContainerSC>
        </ProjectSC>
        <ButtonContainerSC>
          <ButtonSC onClick={showModal}>Calculate</ButtonSC>
        </ButtonContainerSC>
      </ContainerSC>
      <Modal
        show={show}
        handleClose={showModal}
        budget={budget}
        duration={duration}
      />
    </WrapperSC>
  );
};
