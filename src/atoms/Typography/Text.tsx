import React, { FC } from "react";
import { textContainer } from "./styles";
import { TypographyLevels } from "@theme/utils/typography";

export type TextWeight = "400" | "700";

export type TextProps = {
  fontSize: TypographyLevels;
  weight?: TextWeight;
  as?: "span" | "div" | "p";
  className?: string;
};

const Text: FC<TextProps> = ({ children, weight = "400", fontSize, as = "span", className }) => {
  const Tag = as;

  return (
    <Tag
      data-testid="text-component"
      css={(theme) => textContainer(theme, weight, fontSize)}
      className={className}
    >
      {children}
    </Tag>
  );
};

export default Text;
