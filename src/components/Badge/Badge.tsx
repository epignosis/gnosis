import React, { FC } from "react";
import { SerializedStyles } from "@emotion/react";
import { container } from "./styles";

export type Size = "md";
export type Offset = { top: string; right: string };

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  size?: Size;
  offset?: Offset;
};

const Badge: FC<BadgeProps> = ({
  size = "md",
  offset = { top: "0", right: "-8px" },
  children,
  ...rest
}) => {
  return (
    <span css={(theme): SerializedStyles => container(theme, { size, offset })} {...rest}>
      {children}
    </span>
  );
};

export default Badge;
