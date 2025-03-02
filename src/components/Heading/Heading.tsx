import React, { forwardRef, ForwardRefRenderFunction } from "react";
import { headingContainer } from "./styles";
import { TypographyLevels } from "@theme/utils/typography";

export type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  size?: TypographyLevels;
  as?: HeadingTag;
};

export const SIZES = {
  h1: "3xl",
  h2: "2xl",
  h3: "xl",
  h4: "lg",
  h5: "md",
  h6: "sm",
} as const;

const Heading: ForwardRefRenderFunction<HTMLHeadingElement, HeadingProps> = (
  { size, as = "h2", children, ...rest },
  forwardedRef,
) => {
  const HeadingTag = as;
  const selectedSize = size || SIZES[as];

  return (
    <HeadingTag
      css={(theme) => headingContainer(theme, { size: selectedSize })}
      {...rest}
      ref={forwardedRef}
    >
      {children}
    </HeadingTag>
  );
};

export default forwardRef(Heading);
