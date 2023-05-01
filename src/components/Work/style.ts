import styled from "@emotion/styled";

export const WrapperSC = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  margin-top: 34px;
`;

export const ContainerSC = styled.div`
  width: 100%;
  padding: 82px 146px 150px;
`;

export const TitleSC = styled.p`
  font-weight: 800;
  font-size: 40px;
  line-height: 49px;
  color: #3f454c;
  margin-bottom: 42px;
`;

export const BlocksSC = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 300px);
  row-gap: 66px;
  column-gap: 10px;
`;

export const BlockSC = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const NumberSC = styled.p`
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  color: #6295f1;
  margin-bottom: 20px;
  margin-top: 14px;
`;

export const TitleBlockSC = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #222529;
`;

export const DescriptionBlockSC = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #222529;
`;
export const LineSC = styled.div`
  border-bottom: 2px solid #c5c7c9;
  width: calc(100% + 10px);
`;

export const LineSecondSC = styled.div`
  border-bottom: 2px solid #c5c7c9;
  width: calc(100% + 40px);
`;

export const CircleSC = styled.img`
  width: 24px;
`;
