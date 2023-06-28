import React, { FC, HTMLAttributes, useEffect, useLayoutEffect, useRef, useState } from "react";
import Tooltip from "../../Tooltip/Tooltip";

export type CellProps = HTMLAttributes<HTMLTableCellElement> & {
  as?: "td" | "th";
  onClick?: () => void;
};

const Cell: FC<CellProps> = ({ children, as: Component = "td", onClick, style, ...rest }) => {
  const componentRef = useRef<HTMLTableCellElement | null>(null);
  const overflowRef = useRef<HTMLElement | null>(null);
  const [isOverflowActive, setIsOverflowActive] = useState(false);

  useLayoutEffect(() => {
    if (Component === "td" && componentRef.current) {
      overflowRef.current = componentRef.current.querySelector(".has-overflow");
    }
  }, []);

  useEffect(() => {
    if (Component === "td") {
      const el = overflowRef.current;

      if (el) {
        setIsOverflowActive(el.offsetWidth < el.scrollWidth);
      }
    }
  }, [overflowRef]);

  return (
    <Component ref={componentRef} style={style} onClick={onClick} {...rest}>
      <Tooltip content={children} disabled={!isOverflowActive}>
        <span style={style}>{children}</span>
      </Tooltip>
    </Component>
  );
};

export default Cell;
