import React from "react";
import {
  ButtonStartSC,
  ButtonsSC,
  ButtoonContactSC,
  ContainerSC,
  DescriptionBlockSC,
  DescriptionSc,
  ImageContainerSC,
  ImageSC,
  TitleSC,
  WrapperSC,
} from "./style";
import Start from ".././../assets/start.png";

export const StartProject = () => {
  return (
    <WrapperSC>
      <ContainerSC>
        <DescriptionBlockSC>
          <TitleSC>start your project</TitleSC>
          <DescriptionSc>
            We offer domain experts: PM, BA, UI/UX Designers, Developers, QA
            Engineers with rates from $20 per hour
          </DescriptionSc>
          <ButtonsSC>
            <ButtonStartSC href="#">Start a Project</ButtonStartSC>
            <ButtoonContactSC href="#">Contact Us</ButtoonContactSC>
          </ButtonsSC>
        </DescriptionBlockSC>
        <ImageContainerSC>
          <ImageSC src={Start} alt={"start project"} />
        </ImageContainerSC>
      </ContainerSC>
    </WrapperSC>
  );
};
