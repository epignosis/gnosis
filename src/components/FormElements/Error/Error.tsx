import React, { FC, ReactNode } from "react";
import { errorContainer, inputError } from "./styles";

export type ErrorProps = {
  children: ReactNode | string;
};

type ErrorCompoundProps = {
  InputError: FC;
};

const Error: FC & ErrorCompoundProps = ({ children }) => {
  return <article css={errorContainer}>{children}</article>;
};

const InputError: FC = ({ children }) => <span css={inputError}>{children}</span>;

Error.InputError = InputError;

export default Error;
