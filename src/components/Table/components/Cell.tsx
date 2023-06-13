import React, { FC, HTMLAttributes } from "react";
import Tooltip from "../../Tooltip/Tooltip";

export type CellProps = HTMLAttributes<HTMLTableCellElement> & {
  as?: "td" | "th";
  onClick?: () => void;
};

const Cell: FC<CellProps> = ({ children, as: Component = "td", onClick, ...rest }) => {
  return (
    <Tooltip content={"MAnos"}>
      <Component onClick={onClick} {...rest}>
        {children}
      </Component>
    </Tooltip>
  );
};

export default Cell;
