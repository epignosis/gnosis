import React, { ForwardRefRenderFunction, forwardRef } from "react";
import ReactSelect, { SelectInstance } from "react-select";
import classNames from "classnames";
import Label from "../Label/Label";
import { CustomOptionType, CustomSelectProps } from "./types";
import { fakeOptions } from "./data";

const CustomSelect: ForwardRefRenderFunction<
  SelectInstance<CustomOptionType>,
  CustomSelectProps<CustomOptionType, false>
> = (
  {
    id = "",
    status = "valid",
    label,
    inline = false,
    containerAttrs,
    options = fakeOptions,
    ...rest
  },
  forwardedRef,
) => {
  const hasLabel = Boolean(label);

  const containerClassNames = classNames({
    valid: status === "valid",
    error: status === "error",
    inline: hasLabel && inline,
    [containerAttrs?.className ?? ""]: Boolean(containerAttrs?.className),
  });

  return (
    <div className={containerClassNames}>
      {hasLabel && (
        <Label htmlFor={id} aria-labelledby={id}>
          {label}
        </Label>
      )}
      <div className="select-input-wrapper">
        <ReactSelect {...rest} options={options} ref={forwardedRef} />
      </div>
    </div>
  );
};

export default forwardRef(CustomSelect);
