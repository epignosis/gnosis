import React, { memo } from "react";
import { components, DropdownIndicatorProps } from "react-select";
import { CustomDivProps } from "../types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomDropdownIndicator = (props: DropdownIndicatorProps<any, true>): JSX.Element => {
  return (
    <components.DropdownIndicator
      {...props}
      innerProps={
        { ...props.innerProps, "data-testid": "custom-dropdown-indicator" } as CustomDivProps
      }
    />
  );
};

export default memo(CustomDropdownIndicator);
