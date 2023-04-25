import React from "react";
import {
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

export const Calculation = () => {
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
            <ProjectStage />
          </ProjectContainerSC>
        </ProjectSC>
      </ContainerSC>
    </WrapperSC>
  );
};
