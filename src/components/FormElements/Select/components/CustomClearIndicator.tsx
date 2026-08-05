import React, { FC, KeyboardEvent, memo } from "react";
import { components, ClearIndicatorProps } from "react-select";
import { CustomOption } from "../types";

const CustomClearIndicator: FC<ClearIndicatorProps<CustomOption>> = (props) => {
  const { innerProps, selectProps, clearValue } = props;
  const { isDisabled } = selectProps;

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>): void => {
    if (isDisabled) {
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      clearValue();
    }
  };

  return (
    <components.ClearIndicator
      {...props}
      innerProps={{
        ...innerProps,
        role: "button",
        tabIndex: isDisabled ? -1 : 0,
        "aria-label": "Clear selection",
        "aria-hidden": undefined,
        onKeyDown: handleKeyDown,
      }}
    />
  );
};

export default memo(CustomClearIndicator);
