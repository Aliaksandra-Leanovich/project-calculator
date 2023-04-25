import React from "react";
import {
  BlockSC,
  BlocksSC,
  CircleSC,
  ContainerSC,
  DescriptionBlockSC,
  LineSC,
  LineSecondSC,
  NumberSC,
  TitleSC,
  WrapperSC,
} from "./style";
import Circle from "../../assets/circle.png";

export const Work = () => {
  return (
    <WrapperSC>
      <ContainerSC>
        <TitleSC>How we work</TitleSC>
        <BlocksSC>
          <BlockSC>
            <LineSC />
            <CircleSC src={Circle} />
            <NumberSC>01</NumberSC>
            <TitleSC>Project analysis and estimation</TitleSC>
            <DescriptionBlockSC>
              Mockups, specification and estimation of future project
            </DescriptionBlockSC>
          </BlockSC>
          <BlockSC>
            <LineSC />
            <CircleSC src={Circle} />
            <NumberSC>02</NumberSC>
            <TitleSC>Start of work on the project</TitleSC>
            <DescriptionBlockSC>
              We start development process right after you confirm
            </DescriptionBlockSC>
          </BlockSC>
          <BlockSC>
            <LineSC />
            <CircleSC src={Circle} />
            <NumberSC>03</NumberSC>
            <TitleSC>Development</TitleSC>
            <DescriptionBlockSC>Development of the project</DescriptionBlockSC>
          </BlockSC>
          <BlockSC>
            <LineSC />
            <CircleSC src={Circle} />
            <NumberSC>04</NumberSC>
            <TitleSC>Project Management</TitleSC>
            <DescriptionBlockSC>
              Testing all modules of the project
            </DescriptionBlockSC>
          </BlockSC>
          <BlockSC>
            <LineSecondSC />
            <CircleSC src={Circle} />
            <NumberSC>05</NumberSC>
            <TitleSC>Quality Assurance</TitleSC>
            <DescriptionBlockSC>
              Testing all modules of the project
            </DescriptionBlockSC>
          </BlockSC>
          <BlockSC>
            <LineSecondSC />
            <CircleSC src={Circle} />
            <NumberSC>06</NumberSC>
            <TitleSC>Deployment and Delivery</TitleSC>
            <DescriptionBlockSC>
              Following the best practices
            </DescriptionBlockSC>
          </BlockSC>
          <BlockSC>
            <LineSecondSC />
            <CircleSC src={Circle} />
            <NumberSC>07</NumberSC>
            <TitleSC>Payment and Warranty</TitleSC>
            <DescriptionBlockSC>
              To ensure that everyone is satisfied with cooperation
            </DescriptionBlockSC>
          </BlockSC>
        </BlocksSC>
      </ContainerSC>
    </WrapperSC>
  );
};
