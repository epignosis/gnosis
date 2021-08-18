import React, { SelectHTMLAttributes, forwardRef, ForwardRefRenderFunction } from "react";
import { SerializedStyles } from "@emotion/react";
import classNames from "classnames";
import { selectContainer } from "./styles";
import { Label } from "@components";
import { CaretDownSVG } from "@icons/core";

export type SelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, "size" | "onChange"> & {
  size?: "md" | "lg";
  label?: string;
  altLabel?: boolean;
  inline?: boolean;
  onChange?: (selectedValue: string) => void;
};

const Select: ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = (props, forwardedRef) => {
  const {
    id,
    size = "md",
    label,
    altLabel = false,
    inline = false,
    onChange,
    className = "",
    children,
    ...rest
  } = props;
  const hasLabel = Boolean(label);
  const containerClassNames = classNames({
    "alt-label": hasLabel && altLabel,
    [className]: className,
    inline,
  });

  return (
    <div
      css={(theme): SerializedStyles => selectContainer(theme, { size })}
      className={containerClassNames}
    >
      {hasLabel && <Label htmlFor={id}>{label}</Label>}
      <div className="select-input-wrapper">
        <select
          ref={forwardedRef}
          id={id}
          onChange={onChange && ((e): void => onChange(e.target.value))}
          {...rest}
        >
          {children}
        </select>
        <span className="carret-wrapper">
          <CaretDownSVG height={24} />
        </span>
      </div>
    </div>
  );
};

export default forwardRef(Select);
