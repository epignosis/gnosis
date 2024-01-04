import React, { forwardRef, ForwardRefRenderFunction } from "react";
import { SerializedStyles } from "@emotion/react";
import { checkboxContainer } from "./styles";
import { ExtendableProps } from "types/common";

export type CheckboxOption = {
  value: string;
  label?: string | JSX.Element;
  name: string;
  disabled?: boolean;
  isPartiallySelected?: boolean;
};

export type CheckboxSize = "md" | "lg";

export type CheckboxProps = ExtendableProps<
  Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">,
  CheckboxOption & {
    id: string;
    required?: boolean;
    size?: CheckboxSize;
    inline?: boolean;
    containerAttrs?: React.HTMLAttributes<HTMLDivElement>;
  }
>;

const Checkbox: ForwardRefRenderFunction<HTMLDivElement, CheckboxProps> = (props, ref) => {
  const {
    id,
    label,
    size = "md",
    required = false,
    inline = false,
    containerAttrs,
    isPartiallySelected,
    readOnly = false,
    ...rest
  } = props;

  return (
    <div
      ref={ref}
      css={(theme): SerializedStyles => checkboxContainer(theme, { size, inline, readOnly })}
      {...containerAttrs}
    >
      {isPartiallySelected && <span data-testid="is-partially-selected" className="dash" />}
      <input id={id} type="checkbox" readOnly={readOnly} {...rest} />
      <label htmlFor={id}>
        <span className="shadow-element" tabIndex={-1} aria-hidden="true" />
        {label}
        {required && <span className="required" />}
      </label>
    </div>
  );
};

export default React.memo(forwardRef(Checkbox));
