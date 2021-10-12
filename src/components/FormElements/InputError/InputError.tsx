import React, { FC } from "react";
import { inputError } from "./styles";

export type InputErrorProps =
  | ({ as?: "div" } & React.HTMLAttributes<HTMLDivElement>)
  | ({ as?: "span" } & React.HTMLAttributes<HTMLSpanElement>);

const InputError: FC<InputErrorProps> = ({ as = "div", children, ...rest }) => {
  const InputErrorTag = as;

  return (
    <InputErrorTag css={inputError} {...rest}>
      {children}
    </InputErrorTag>
  );
};

export default InputError;
