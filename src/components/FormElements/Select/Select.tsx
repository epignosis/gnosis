import React, { ForwardRefRenderFunction, forwardRef } from "react";
import ReactSelect, { SelectInstance } from "react-select";
import { SerializedStyles } from "@emotion/react";
import classNames from "classnames";
import Label from "../Label/Label";
import { selectContainer } from "./styles";
import { CustomOptionType, CustomSelectProps } from "./types";
import { formElements } from "@theme/default/config";

const MAX_MENU_HEIGHT = 300;
const INDICATOR_TRANSITION_DURATION = "250";

const CustomSelect: ForwardRefRenderFunction<
  SelectInstance<CustomOptionType>,
  CustomSelectProps<CustomOptionType>
> = (props, forwardedRef) => {
  const {
    id = "",
    label,
    options = [],
    size = "md",
    inline = false,
    status = "valid",
    maxMenuHeight = MAX_MENU_HEIGHT,
    isSearchable = false,
    ...rest
  } = props;
  const hasLabel = Boolean(label);

  const containerClassNames = classNames({
    valid: status === "valid",
    error: status === "error",
  });

  return (
    <div css={(theme): SerializedStyles => selectContainer(theme, { size, inline })}>
      {hasLabel && (
        <Label htmlFor={id} aria-labelledby={id}>
          {label}
        </Label>
      )}
      <div className="select-input-wrapper">
        <ReactSelect
          {...rest}
          ref={forwardedRef}
          options={options}
          isSearchable={isSearchable}
          maxMenuHeight={maxMenuHeight}
          classNames={{
            control: () => `control-${size} ${containerClassNames}`,
            option: () => `option-${size}`,
          }}
          styles={{
            dropdownIndicator: (base, state) => ({
              ...base,
              transform: state.selectProps.menuIsOpen ? "rotate(-180deg)" : "rotate(0)",
              transition: INDICATOR_TRANSITION_DURATION,
            }),
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: state.isFocused
                ? formElements.input.borderFocusColor
                : baseStyles.borderColor,
              ":hover": { borderColor: formElements.input.borderFocusColor },
            }),
          }}
          components={{
            IndicatorSeparator: () => null,
          }}
        />
      </div>
    </div>
  );
};

export default forwardRef(CustomSelect);
