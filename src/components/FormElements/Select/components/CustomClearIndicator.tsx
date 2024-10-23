import React, { memo } from "react";
import { components, ClearIndicatorProps, GroupBase } from "react-select";
import { CustomDivProps, CustomOption } from "../types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomClearIndicator = (
  props: ClearIndicatorProps<CustomOption, boolean, GroupBase<CustomOption>>,
): JSX.Element => {
  return (
    <components.ClearIndicator
      {...props}
      innerProps={
        { ...props.innerProps, "data-testid": "custom-clear-indicator" } as CustomDivProps
      }
    />
  );
};

export default memo(CustomClearIndicator);
