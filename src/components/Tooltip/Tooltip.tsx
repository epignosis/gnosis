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
  showArrow?: boolean;
  borderColor?: string;
};

const Tooltip: FC<TooltipProps> = ({
  parentProps,
  children,
  content,
  as = "div",
  placement = "top",
  maxWidth = 350,
  interactive = true,
  showArrow = true,
  borderColor,
  ...rest
}) => {
  const Tag = as;
  const tagProps = { role: "tooltip", ...parentProps };

  return (
    <Tippy
      placement={placement}
      interactive={interactive}
      appendTo={document.body}
      // @touch prop is to prevent touch devices to open tooltip on tap of a button (instead of triggering the element's onClick event)
      // With the below setting, the tooltip will only open if the user holds the button for 300ms
      touch={["hold", 300]}
      render={(attrs): ReactNode => (
        <div
          className="tooltip"
          role="alert"
          css={(theme) => tooltipContainer(maxWidth, theme, borderColor)}
          {...attrs}
        >
          {content}
          {showArrow && <div id="arrow" data-testid="tooltip-arrow" data-popper-arrow />}
        </div>
      )}
      {...rest}
    >
      <Tag {...tagProps}>{children}</Tag>
    </Tippy>
  );
};

export default Tooltip;
