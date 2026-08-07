import React, { FC, KeyboardEvent, RefObject, memo } from "react";
import { components, ClearIndicatorProps, SelectInstance } from "react-select";
import { CustomOption } from "../types";

type CustomClearIndicatorProps = ClearIndicatorProps<CustomOption> & {
  selectRef: RefObject<SelectInstance<CustomOption>>;
};

const CustomClearIndicator: FC<CustomClearIndicatorProps> = ({ selectRef, ...props }) => {
  const { innerProps, selectProps, clearValue } = props;

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      event.stopPropagation();
      clearValue();
      // The clear indicator unmounts once the value is gone, taking focus with
      // it. Refocus the select's own input so keyboard users can keep going.
      selectRef.current?.focus();
    }
  };

  const clearIndicatorInnerProps = {
    ...innerProps,
    role: "button",
    tabIndex: 0,
    "aria-label": "Clear selection",
    "aria-hidden": undefined,
    "data-testid": `${selectProps.id}-clear`,
    onKeyDown: handleKeyDown,
  };

  return <components.ClearIndicator {...props} innerProps={clearIndicatorInnerProps} />;
};

export default memo(CustomClearIndicator);
