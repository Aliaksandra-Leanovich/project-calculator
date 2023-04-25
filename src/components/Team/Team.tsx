import React from "react";
import {
  BackgroundSC,
  BlockSc,
  BlocksSC,
  ButtonSC,
  ContainerSC,
  LineSc,
  TextSc,
  TitleBlockSC,
  TitleSC,
  WrapperSC,
} from "./style";

export const Team = () => {
  return (
    <BackgroundSC>
      <WrapperSC>
        <ContainerSC>
          <TitleSC>Our Team includes</TitleSC>
          <LineSc />
          <BlocksSC>
            <BlockSc>
              <TitleBlockSC>Developers</TitleBlockSC>
              <TextSc>
                Couraged Developers of all ranges (Junior, Middle, Senior) and
                skill sets
              </TextSc>
            </BlockSc>
            <BlockSc>
              <TitleBlockSC>Project Manager</TitleBlockSC>
              <TextSc>
                Controls the work and guarantees project goal achievement
              </TextSc>
            </BlockSc>
            <BlockSc>
              <TitleBlockSC>Business Analyst</TitleBlockSC>
              <TextSc>
                Makes your business automatisation more streamlined and
                efficient
              </TextSc>
            </BlockSc>
            <BlockSc>
              <TitleBlockSC>UX/UI Designer</TitleBlockSC>
              <TextSc>Creates user-friendly interface solutions</TextSc>
            </BlockSc>
            <BlockSc>
              <TitleBlockSC>DevOps</TitleBlockSC>
              <TextSc>Configures development environment</TextSc>
            </BlockSc>
            <BlockSc>
              <TitleBlockSC>QA Engineer</TitleBlockSC>
              <TextSc>Ensures that the solution works as expected</TextSc>
            </BlockSc>
          </BlocksSC>
          <ButtonSC href="#">Request a Specialist</ButtonSC>
        </ContainerSC>
      </WrapperSC>
    </BackgroundSC>
  );
};
