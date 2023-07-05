import React, { FC, ReactNode } from "react";
import Tippy, { TippyProps } from "@tippyjs/react/headless";
import { tooltipContainer } from "./styles";

export type TooltipProps = TippyProps & {
  as?: "div" | "span";
  content: TippyProps["content"];
  interactive?: boolean;
};

const Tooltip: FC<TooltipProps> = ({
  children,
  content,
  as = "div",
  placement = "top",
  interactive = true,
  ...rest
}) => {
  const Tag = as;

  return (
    <Tippy
      interactive={interactive}
      placement={placement}
      render={(attrs): ReactNode => (
        <div className="tooltip" css={tooltipContainer} {...attrs}>
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
