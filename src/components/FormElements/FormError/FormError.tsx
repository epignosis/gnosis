import React, { FC } from "react";
import { errorContainer } from "./styles";

export type FormErrorProps = React.HTMLAttributes<HTMLElement>;

const FormError: FC<FormErrorProps> = ({ children, ...rest }) => (
  <article css={errorContainer} {...rest}>
    {children}
  </article>
);

export default FormError;
