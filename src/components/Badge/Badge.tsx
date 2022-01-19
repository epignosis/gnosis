import React, { FC } from "react";
import { SerializedStyles } from "@emotion/react";
import { container } from "./styles";

export type Size = "md";
export type Offset = { top: string; right: string };

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  size?: Size;
  offset?: Offset;
  badgeContent?: number;
};

const Badge: FC<BadgeProps> = ({
  size = "md",
  offset = { top: "-7px", right: "-15px" },
  children,
  badgeContent,
  ...rest
}) => {
  return (
    <div css={(theme): SerializedStyles => container(theme, { size, offset })} {...rest}>
      <span className="contentContainer"> {badgeContent} </span>
      {children}
    </div>
  );
};

export default Badge;
