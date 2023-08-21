import React, { forwardRef, ForwardRefRenderFunction } from "react";
import ReactSelect from "react-select";
import type { Props as CustomSelectProps, SelectInstance } from "react-select";
import classNames from "classnames";
import Label from "../Label/Label";

const CustomSelect: ForwardRefRenderFunction<SelectInstance, CustomSelectProps> = (
  props,
  forwardedRef,
) => {
  const { id = "", status = "valid", label, inline = false, containerAttrs, ...rest } = props;
  const hasLabel = Boolean(label);
  const containerClassNames = classNames({
    valid: status === "valid",
    error: status === "error",
    inline: hasLabel && inline,
    [containerAttrs?.className ?? ""]: Boolean(containerAttrs?.className),
  });

  return (
    <div
      // css={(theme): SerializedStyles => selectContainer(theme, { size, dir })}
      // {...containerAttrs}
      className={containerClassNames}
    >
      {hasLabel && (
        <Label htmlFor={id} aria-labelledby={id}>
          {label}
        </Label>
      )}
      <div className="select-input-wrapper">
        <ReactSelect ref={forwardedRef} instanceId={id} classNamePrefix="react-select" {...rest} />
      </div>
    </div>
  );
};

export default forwardRef(CustomSelect);
