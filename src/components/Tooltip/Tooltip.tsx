import React, { FC, ReactNode } from "react";
import Tippy, { TippyProps } from "@tippyjs/react/headless";
import { tooltipContainer } from "./styles";

export type TooltipProps = TippyProps & {
  as?: "div" | "span";
  content: TippyProps["content"];
  maxWidth?: number;
};

const Tooltip: FC<TooltipProps> = ({
  children,
  content,
  as = "div",
  placement = "top",
  maxWidth = 350,
  ...rest
}) => {
  const Tag = as;

  return (
    <Tippy
      placement={placement}
      render={(attrs): ReactNode => (
        <div className="tooltip" css={(theme) => tooltipContainer(maxWidth, theme)} {...attrs}>
          {content}
          <div id="arrow" data-testid="tooltip-arrow" data-popper-arrow />
        </div>
      )}
      {...rest}
    >
      <Tag>{children}</Tag>
    </Tippy>
  );
};

export default Tooltip;
