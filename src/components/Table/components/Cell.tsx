import React, { FC, HTMLAttributes, useEffect, useLayoutEffect, useRef, useState } from "react";
import Tooltip from "../../Tooltip/Tooltip";
import { Row } from "../types";

export type CellProps = HTMLAttributes<HTMLTableCellElement> & {
  as?: "td" | "th";
  windowSize?: number[];
  onClick?: (row) => void;
  row?: Row;
  maxWidth?: number;
};

const Cell: FC<CellProps> = ({
  children,
  as: Component = "td",
  onClick,
  row,
  windowSize,
  maxWidth,
  ...rest
}) => {
  const componentRef = useRef<HTMLTableCellElement | null>(null);
  const overflowRef = useRef<HTMLElement | null>(null);
  const [isOverflowActive, setIsOverflowActive] = useState(false);
  console.log("re-render cell");
  const styles = { maxWidth: maxWidth ? `${maxWidth}px` : "auto" };

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
  }, [overflowRef, windowSize]);

  return (
    <Component
      ref={componentRef}
      style={styles}
      onClick={onClick ? () => onClick(row) : undefined}
      {...rest}
    >
      <Tooltip content={children} disabled={!isOverflowActive}>
        <span style={styles}>{children}</span>
      </Tooltip>
    </Component>
  );
};

export default React.memo(Cell);
