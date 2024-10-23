import React, { FC, memo } from "react";
import { components, MenuProps } from "react-select";
import { CustomDivProps, CustomOption } from "../types";

const CustomMenuContainer: FC<MenuProps<CustomOption>> = ({ children, ...props }) => {
  return (
    <components.Menu
      {...props}
      innerProps={{ ...props.innerProps, "data-testid": "custom-menu-container" } as CustomDivProps}
    >
      {children}
    </components.Menu>
  );
};

export default memo(CustomMenuContainer);
