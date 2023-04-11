import React, { FC, HTMLAttributes } from "react";

export type CellProps = HTMLAttributes<HTMLTableCellElement> & {
  as?: "td" | "th";
  onClick?: () => void;
};

const Cell: FC<CellProps> = ({ children, as: Component = "td", onClick, ...rest }) => {
  return (
    <Component onClick={onClick} {...rest}>
      {children}
    </Component>
  );
};

export default Cell;