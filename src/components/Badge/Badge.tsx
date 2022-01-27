import React, { FC } from "react";
import { SerializedStyles } from "@emotion/react";
import classNames from "classnames";
import { container } from "./styles";

export type Size = "md";
export type Offset = { top: string; right: string };

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  size?: Size;
  offset?: Offset;
  badgeContent?: string;
  containerAttrs?: React.HTMLAttributes<HTMLDivElement>;
};

const Badge: FC<BadgeProps> = ({
  size = "md",
  offset = { top: "-8px", right: "-15px" },
  children,
  badgeContent,
  containerAttrs,
  ...rest
}) => {
  const containerClassNames = classNames({
    "has-content": badgeContent,
    "big-content": badgeContent && badgeContent.length >= 3,
  });

  return (
    <div
      css={(theme): SerializedStyles => container(theme, { size, offset })}
      className={containerClassNames}
      {...containerAttrs}
    >
      <span className="content-container" {...rest}>
        {badgeContent}
      </span>
      {children}
    </div>
  );
};

export default Badge;
