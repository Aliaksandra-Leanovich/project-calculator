import React from "react";
import {
  BlockSC,
  BlocksSC,
  BottomSC,
  ButtonSC,
  ContainerSC,
  EmailSC,
  FileBlockSC,
  FileIconSC,
  FileTextSC,
  FormSC,
  FormTitleSc,
  LineSc,
  LocationSC,
  MapSC,
  SocialContainerSC,
  SocialSC,
  SocialsBlockSC,
  SocialsSC,
  TextSC,
  TitleSC,
  WrapperSC,
} from "./style";
import { Controller, useForm } from "react-hook-form";
import { Input } from "../Input";
import File from "../../assets/file.png";
import Telegram from "../../assets/telegram.png";
import Skype from "../../assets/skype.png";
import Linkedin from "../../assets/linkedin.png";
import Facebook from "../../assets/facebook.png";

export const ContactUs = () => {
  const { register, control } = useForm();
  return (
    <WrapperSC>
      <ContainerSC>
        <TitleSC>Contact Us</TitleSC>
        <LineSc />
        <BlocksSC>
          <FormSC>
            <FormTitleSc>Send us a few words about your projects</FormTitleSc>
            <Controller
              name="name"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  type="text"
                  label="name"
                  value={value}
                  onChange={onChange}
                  register={register}
                  placeholder="Name"
                />
              )}
              rules={{
                required: false,
              }}
            />
            <Controller
              name="email"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  type="email"
                  label="email"
                  value={value}
                  onChange={onChange}
                  register={register}
                  placeholder="Contact email*"
                />
              )}
              rules={{
                required: false,
              }}
            />
            <Controller
              name="phone"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  type="text"
                  label="phone"
                  value={value}
                  onChange={onChange}
                  register={register}
                  placeholder="Contact phone"
                />
              )}
              rules={{
                required: false,
              }}
            />
            <Controller
              name="project"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  type="text"
                  label="project"
                  value={value}
                  onChange={onChange}
                  register={register}
                  placeholder="Contact phone"
                />
              )}
              rules={{
                required: false,
              }}
            />
            <FileBlockSC>
              <FileIconSC src={File} />
              <FileTextSC>Attach file</FileTextSC>
            </FileBlockSC>
            <ButtonSC disabled>Send</ButtonSC>
          </FormSC>
          <BlockSC>
            <SocialsBlockSC>
              <SocialsSC>
                <SocialContainerSC>
                  <SocialSC src={Telegram} />
                </SocialContainerSC>
                <SocialContainerSC>
                  <SocialSC src={Skype} />
                </SocialContainerSC>
                <SocialContainerSC>
                  <SocialSC src={Linkedin} />
                </SocialContainerSC>
                <SocialContainerSC>
                  <SocialSC src={Facebook} />
                </SocialContainerSC>
              </SocialsSC>
              <EmailSC>team@mifort.org</EmailSC>
              <div>
                <LocationSC>
                  Estonia, Tallinn, Kesklinna linnaosa, Pärnu mnt 105, 11312
                </LocationSC>
                <MapSC>View on map</MapSC>
              </div>
            </SocialsBlockSC>
            <BottomSC>
              <TextSC>© Mifort 2023 - All rights reserved</TextSC>
            </BottomSC>
          </BlockSC>
        </BlocksSC>
      </ContainerSC>
    </WrapperSC>
  );
};
