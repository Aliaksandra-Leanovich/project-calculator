import CrossIcon from "../../assets/cross-icon.svg";
import {
  ButtonSC,
  ButtonSendSC,
  ContainerButtonSC,
  ContainerChildSC,
  ContainerSC,
  DescriptionSC,
  ResultSc,
  SpanSC,
  StyledInputSC,
  TitleSC,
  WrapperSC,
} from "./styles";
import { IModalProps } from "./types";

export const Modal = ({ handleClose, show, budget, duration }: IModalProps) => {
  return (
    <WrapperSC show={show}>
      <ContainerSC show={show}>
        <ContainerButtonSC>
          <ButtonSC type="button" onClick={handleClose}>
            <img src={CrossIcon} alt="cross" />
          </ButtonSC>
        </ContainerButtonSC>
        <ContainerChildSC>
          <TitleSC>Approximate calculations of your project:</TitleSC>
          <ResultSc>
            <SpanSC>$ {budget}</SpanSC> for <SpanSC>{duration} months </SpanSC>
            of work
          </ResultSc>
          <DescriptionSC>
            Leave your contacts here and we’ll contact you within an hour or any
            other time you specify here.
          </DescriptionSC>
          <StyledInputSC placeholder="Leave your email here*" type="email" />
          <ButtonSendSC>Send</ButtonSendSC>
        </ContainerChildSC>
      </ContainerSC>
    </WrapperSC>
  );
};
