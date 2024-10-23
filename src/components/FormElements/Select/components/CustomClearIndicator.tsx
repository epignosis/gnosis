import React, { memo } from "react";
import { components, ClearIndicatorProps } from "react-select";
import { CustomDivProps } from "../types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomClearIndicator = (props: ClearIndicatorProps<any, true>): JSX.Element => {
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
