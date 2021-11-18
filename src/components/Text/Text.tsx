import React, { FC } from "react";
import { textContainer } from "./styles";
import { TypographyLevels } from "@theme/utils/typography";

export type TextWeight = "400" | "700";

type BaseProps =
  | ({ as?: "div" } & React.HTMLAttributes<HTMLDivElement>)
  | ({ as?: "span" } & React.HTMLAttributes<HTMLSpanElement>)
  | ({ as?: "p" } & React.HTMLAttributes<HTMLParagraphElement>);

export type TextProps = BaseProps & {
  fontSize: TypographyLevels;
  weight?: TextWeight;
};

const Text: FC<TextProps> = ({ children, weight = "400", fontSize, as = "span", ...rest }) => {
  const Tag = as;

  return (
    <Tag
      data-testid="text-component"
      css={(theme) => textContainer(theme, weight, fontSize)}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Text;
