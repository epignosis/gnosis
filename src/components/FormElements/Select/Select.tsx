import React, { forwardRef, ForwardRefRenderFunction } from "react";
import { SerializedStyles } from "@emotion/react";
import classNames from "classnames";
import Label from "../Label/Label";
import { selectContainer } from "./styles";
import { ExtendableProps } from "types/common";

export type SelectProps = ExtendableProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  {
    status?: "valid" | "error";
    size?: "sm" | "md" | "lg";
    label?: string;
    inline?: boolean;
    onChange?: (selectedValue: string) => void;
    containerAttrs?: React.HTMLAttributes<HTMLDivElement>;
  }
>;

const Select: ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = (props, forwardedRef) => {
  const {
    id = "",
    status = "valid",
    size = "md",
    label,
    inline = false,
    onChange,
    children,
    containerAttrs,
    ...rest
  } = props;
  const hasLabel = Boolean(label);
  const containerClassNames = classNames({
    valid: status === "valid",
    error: status === "error",
    inline: hasLabel && inline,
    disabled: Boolean(rest?.disabled),
    [containerAttrs?.className ?? ""]: Boolean(containerAttrs?.className),
  });

  return (
    <div
      css={(theme): SerializedStyles => selectContainer(theme, { size, dir: document.dir })}
      {...containerAttrs}
      className={containerClassNames}
    >
      {hasLabel && (
        <Label htmlFor={id} aria-labelledby={id}>
          {label}
        </Label>
      )}
      <div className="select-input-wrapper">
        <select
          ref={forwardedRef}
          onChange={onChange && ((e): void => onChange(e.target.value))}
          id={id}
          {...rest}
        >
          {children}
        </select>
      </div>
    </div>
  );
};

export default forwardRef(Select);
