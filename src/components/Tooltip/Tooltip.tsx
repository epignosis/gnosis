import React, { FC, ReactNode } from "react";
import Tippy, { TippyProps } from "@tippyjs/react/headless";
import { tooltipContainer } from "./styles";

export type TooltipProps = TippyProps & {
  as?:
    | "div"
    | "span"
    | "li"
    | "section"
    | "article"
    | "header"
    | "footer"
    | "nav"
    | "aside"
    | "main"
    | "ul"
    | "ol"
    | "table"
    | "tbody"
    | "thead"
    | "tfoot"
    | "tr"
    | "td"
    | "th"
    | "figure"
    | "figcaption"
    | "form"
    | "fieldset";
  parentProps?: object;
  content: TippyProps["content"];
  maxWidth?: number;
};

const Tooltip: FC<TooltipProps> = ({
  parentProps = { role: "tooltip" },
  children,
  content,
  as = "div",
  placement = "top",
  maxWidth = 350,
  interactive = true,
  ...rest
}) => {
  const Tag = as;

  return (
    <Tippy
      placement={placement}
      interactive={interactive}
      appendTo={document.body}
      render={(attrs): ReactNode => (
        <div className="tooltip" css={(theme) => tooltipContainer(maxWidth, theme)} {...attrs}>
          {content}
          <div id="arrow" data-testid="tooltip-arrow" data-popper-arrow />
        </div>
      )}
      {...rest}
    >
      <Tag {...parentProps}>{children}</Tag>
    </Tippy>
  );
};

export default Tooltip;
