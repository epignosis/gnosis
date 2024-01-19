import React, { FC, HTMLAttributes, memo, useLayoutEffect, useRef, useState } from "react";
import Tooltip from "../../Tooltip/Tooltip";

export type CellProps = HTMLAttributes<HTMLTableCellElement> & {
  as?: "td" | "th";
  maxWidth?: number;
  windowWidth?: number;
  windowHeight?: number;
  onClick?: () => void;
};

const Cell: FC<CellProps> = ({
  children,
  as: Component = "td",
  maxWidth,
  windowWidth,
  windowHeight,
  ...rest
}) => {
  const componentRef = useRef<HTMLTableCellElement | null>(null);
  const overflowRef = useRef<HTMLElement | null>(null);
  const [isOverflowActive, setIsOverflowActive] = useState(false);
  const isRowCell = Component === "td";
  const shouldRenderTooltip = Boolean(Component === "td" && maxWidth);
  const style = isRowCell
    ? { maxWidth: maxWidth ? `${maxWidth}px` : "auto" } // row cell styles
    : { width: maxWidth ? `${maxWidth}px` : "auto" }; // column cell styles

  useLayoutEffect(() => {
    // determine if the row cell is overflown on initial render
    if (shouldRenderTooltip && componentRef.current) {
      const element = componentRef.current.querySelector(".has-overflow");

      if (element) {
        const el = element as HTMLElement;
        overflowRef.current = el;
        setIsOverflowActive(el.offsetWidth < el.scrollWidth);
      }
    }
  }, []);

  useLayoutEffect(() => {
    // determine if the row cell is overflown on window width or height change
    if (shouldRenderTooltip) {
      const el = overflowRef.current;
      if (el) setIsOverflowActive(el.offsetWidth < el.scrollWidth);
    }
  }, [windowWidth, windowHeight]);

  return (
    <Component ref={componentRef} style={style} {...rest}>
      {shouldRenderTooltip ? (
        <Tooltip content={children} disabled={!isOverflowActive}>
          <span style={style}>{children}</span>
        </Tooltip>
      ) : (
        children
      )}
    </Component>
  );
};

export default memo(Cell);
