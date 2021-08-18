import React, { FC } from "react";
import { label } from "./styles";

export type LabelSize = "md" | "lg";

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  size?: LabelSize;
};

const Label: FC<LabelProps> = ({ size = "md", children, ...rest }) => {
  return (
    <label css={(theme) => label(theme, { size })} {...rest}>
      {children}
    </label>
  );
};

export default Label;
