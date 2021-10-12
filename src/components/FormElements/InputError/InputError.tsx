import React, { FC } from "react";
import { inputError } from "./styles";

type InputErrorTag = "div" | "span";

export type InputErrorProps = React.HTMLAttributes<HTMLDivElement | HTMLSpanElement> & {
  as?: InputErrorTag;
};

const InputError: FC<InputErrorProps> = ({ as = "div", children, ...rest }) => {
  const InputErrorTag = as;

  return (
    <InputErrorTag css={inputError} {...rest}>
      {children}
    </InputErrorTag>
  );
};

export default InputError;
