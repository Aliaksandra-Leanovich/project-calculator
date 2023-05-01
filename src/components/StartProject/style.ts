import styled from "@emotion/styled";

export const WrapperSC = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`;

export const ContainerSC = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.9fr;
  column-gap: 100px;
  justify-content: center;
  align-items: center;
`;

export const ImageContainerSC = styled.div`
  width: 100%;
`;

export const ImageSC = styled.img`
  width: 100%;
`;

export const DescriptionBlockSC = styled.div`
  padding: 0 0 0 100px;
`;

export const TitleSC = styled.p`
  font-style: normal;
  font-weight: 800;
  font-size: 80px;
  line-height: 98px;
  text-transform: capitalize;
  margin-bottom: 60px;
  color: #2b3687;
`;

export const DescriptionSc = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 175%;
  margin-bottom: 80px;
  letter-spacing: -0.005em;
  color: #3f454c;
`;

export const ButtonStartSC = styled.button`
  background: #6295f1;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.015em;
  padding: 17px 24px;
  color: #ffffff;
`;

export const ButtoonContactSC = styled.button`
  border: 2px solid #6295f1;
  padding: 17px 34px;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.015em;
  color: #6295f1;
`;

export const ButtonsSC = styled.div`
  display: flex;
  column-gap: 24px;
  justify-content: center;
  align-items: center;
`;
