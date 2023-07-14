import React, { FC } from "react";
import { label } from "./styles";

export type LabelSize = "md" | "lg";

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  size?: LabelSize;
  margin?: boolean;
};

const Label: FC<LabelProps> = ({ size = "md", children, margin = true, ...rest }) => (
  <label css={(theme) => label(theme, { size, margin })} {...rest}>
    {children}
  </label>
);

export default Label;
