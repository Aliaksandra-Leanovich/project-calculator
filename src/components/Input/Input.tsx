import { ContainerSC, StyledInputSC } from "./style";
import { IInputProps } from "./types";

export const Input = ({ type, placeholder, label, register }: IInputProps) => {
  return (
    <ContainerSC>
      <StyledInputSC
        type={type}
        placeholder={placeholder}
        {...register(label)}
      />
    </ContainerSC>
  );
};
