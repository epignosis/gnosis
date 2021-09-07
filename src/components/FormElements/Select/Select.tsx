import React, { SelectHTMLAttributes, forwardRef, ForwardRefRenderFunction } from "react";
import { SerializedStyles } from "@emotion/react";
import classNames from "classnames";
import { selectContainer } from "./styles";
import { Label } from "@components";
import { CaretDownSVG } from "@icons/core";
import { ExtendableProps } from "types/common";

export type SelectProps = ExtendableProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  {
    size?: "md" | "lg";
    label?: string;
    inline?: boolean;
    onChange?: (selectedValue: string) => void;
  }
>;

const Select: ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = (props, forwardedRef) => {
  const {
    id,
    size = "md",
    label,
    inline = false,
    onChange,
    className = "",
    children,
    ...rest
  } = props;
  const hasLabel = Boolean(label);
  const containerClassNames = classNames({
    inline: hasLabel && inline,
    [className]: className,
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
