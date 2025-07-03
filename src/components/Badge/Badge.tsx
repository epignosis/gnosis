import React, { FC } from "react";
import { SerializedStyles } from "@emotion/react";
import classNames from "classnames";
import { container } from "./styles";

export type Size = "md" | "lg";
export type Offset = { top: string; right: string };

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  size?: Size;
  offset?: Offset;
  badgeContent?: string;
  containerAttrs?: React.HTMLAttributes<HTMLDivElement>;
  withPulse?: boolean;
};

const Badge: FC<BadgeProps> = ({
  size = "md",
  offset = { top: "-8px", right: "-15px" },
  children,
  badgeContent,
  containerAttrs,
  withPulse = false,
  ...rest
}) => {
  const containerClassNames = classNames({
    "has-content": badgeContent,
    "big-content": badgeContent && badgeContent.length >= 3,
  });

  const contentClassNames = classNames("content-container", {
    pulse: withPulse,
  });

  return (
    <div
      css={(theme): SerializedStyles => container(theme, { size, offset })}
      className={containerClassNames}
      {...containerAttrs}
    >
      <span className={contentClassNames} {...rest}>
        {badgeContent}
      </span>
      {children}
    </div>
  );
};

export default Badge;
