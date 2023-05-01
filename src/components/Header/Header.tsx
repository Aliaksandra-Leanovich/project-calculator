import React from "react";
import {
  ButtonSC,
  ContainerSC,
  LogoContainerSC,
  StyledHeaderSC,
  WrapperSC,
} from "./style";
import Logo from "../../assets/logo.svg";
import { Navigation } from "../Navigation/Navigation";

export const Header = () => {
  return (
    <StyledHeaderSC>
      <WrapperSC>
        <ContainerSC>
          <LogoContainerSC href="#">
            <img src={Logo} alt="MIFORT" />
          </LogoContainerSC>
          <Navigation />
          <ButtonSC disabled>Contact Us</ButtonSC>
        </ContainerSC>
      </WrapperSC>
    </StyledHeaderSC>
  );
};
