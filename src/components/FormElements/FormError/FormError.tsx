import React, { FC } from "react";
import { errorContainer } from "./styles";

const FormError: FC = ({ children }) => <article css={errorContainer}>{children}</article>;

export default FormError;
