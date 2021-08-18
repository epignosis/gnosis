import React, { FC, ReactNode } from "react";
import { errorContainer, inputError } from "./styles";

export type ErrorProps = {
  children: ReactNode | string;
};

type ErrorCompoundProps = {
  InputError: FC<InputErrorProps>;
};

const Error: FC<ErrorProps> & ErrorCompoundProps = ({ children }) => {
  return <article css={errorContainer}>{children}</article>;
};

export type InputErrorProps = {
  children?: string;
};

const InputError: FC<InputErrorProps> = ({ children }) => <span css={inputError}>{children}</span>;

Error.InputError = InputError;

export default Error;
