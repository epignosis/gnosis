import React, { ForwardRefRenderFunction, forwardRef } from "react";
import ReactSelect, { SelectInstance } from "react-select";
import { SerializedStyles } from "@emotion/react";
import classNames from "classnames";
import Label from "../Label/Label";
import { CustomOptionType, CustomSelectProps } from "./types";
import { fakeOptions } from "./data";
import { selectContainer } from "./styles";

const CustomSelect: ForwardRefRenderFunction<
  SelectInstance<CustomOptionType>,
  CustomSelectProps<CustomOptionType>
> = (props, forwardedRef) => {
  const {
    id = "",
    label,
    options = fakeOptions,
    size = "md",
    inline = true,
    status = "valid",
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
          classNames={{
            control: () => `control-${size} ${containerClassNames}`,
            option: () => `option-${size}`,
          }}
          options={options}
          ref={forwardedRef}
          styles={{
            dropdownIndicator: (base, state) => ({
              ...base,
              transform: state.selectProps.menuIsOpen ? "rotate(-180deg)" : "rotate(0)",
              transition: "250ms",
            }),
          }}
          components={{
            IndicatorSeparator: () => null,
          }}
          menuIsOpen={true}
        />
      </div>
    </div>
  );
};

export default forwardRef(CustomSelect);
