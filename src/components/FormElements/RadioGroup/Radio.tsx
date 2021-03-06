import React, { FC, InputHTMLAttributes } from "react";
import { SerializedStyles } from "@emotion/react";
import { InputSize } from "../Input/Input";
import { radioButtonContainer } from "./styles";
import { ExtendableProps } from "types/common";

export type RadioOption = {
  value: string;
  label: string;
  disabled?: boolean;
  containerAttrs?: React.HTMLAttributes<HTMLDivElement>;
};

export type RadioProps = ExtendableProps<
  InputHTMLAttributes<HTMLInputElement>,
  RadioOption & {
    id: string;
    size?: InputSize;
    inline?: boolean;
  }
>;

const Radio: FC<RadioProps> = ({
  id,
  label,
  size = "md",
  inline = false,
  containerAttrs,
  ...rest
}) => (
  <div
    css={(theme): SerializedStyles => radioButtonContainer(theme, { size, inline })}
    {...containerAttrs}
  >
    <input id={id} type="radio" {...rest} />
    <label htmlFor={id}>{label}</label>
  </div>
);

export default Radio;
