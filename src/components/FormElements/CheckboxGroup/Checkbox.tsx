import React, { forwardRef, ForwardRefRenderFunction } from "react";
import { SerializedStyles } from "@emotion/react";
import { checkboxContainer } from "./styles";
import { ExtendableProps } from "types/common";

export type CheckboxOption = {
  value: string;
  label: string;
  name: string;
  disabled?: boolean;
};

export type CheckboxSize = "md" | "lg";

export type CheckboxProps = ExtendableProps<
  Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">,
  CheckboxOption & {
    id: string;
    size?: CheckboxSize;
    inline?: boolean;
    containerAttrs?: React.HTMLAttributes<HTMLDivElement>;
  }
>;

const Checkbox: ForwardRefRenderFunction<HTMLDivElement, CheckboxProps> = (props, ref) => {
  const { id, label, size = "md", inline = false, containerAttrs, ...rest } = props;

  return (
    <div
      ref={ref}
      css={(theme): SerializedStyles => checkboxContainer(theme, { size, inline })}
      {...containerAttrs}
    >
      <input id={id} type="checkbox" {...rest} />
      <label htmlFor={id}>
        <span className="shadow-element" tabIndex={-1} aria-hidden="true" />
        {label}
      </label>
    </div>
  );
};

export default forwardRef(Checkbox);
