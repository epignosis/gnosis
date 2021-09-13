import React, { FC } from "react";
import { errorContainer } from "./styles";

const Error: FC = ({ children }) => <article css={errorContainer}>{children}</article>;

export default Error;
