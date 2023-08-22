import React, { ForwardRefRenderFunction, forwardRef } from "react";
import ReactSelect, { SelectInstance } from "react-select";
import Label from "../Label/Label";
import { CustomOptionType, CustomSelectProps } from "./types";
import { fakeOptions } from "./data";

const CustomSelect: ForwardRefRenderFunction<
  SelectInstance<CustomOptionType>,
  CustomSelectProps<CustomOptionType, false>
> = (props, forwardedRef) => {
  const { id = "", label, options = fakeOptions, ...rest } = props;
  const hasLabel = Boolean(label);

  return (
    <div>
      {hasLabel && (
        <Label htmlFor={id} aria-labelledby={id}>
          {label}
        </Label>
      )}
      <div className="select-input-wrapper">
        <ReactSelect
          {...rest}
          classNames={{
            option: () => "foufoutos",
          }}
          options={options}
          ref={forwardedRef}
          // menuIsOpen={true}
          // value={options[0]}
        />
      </div>
    </div>
  );
};

export default forwardRef(CustomSelect);
