import React, {
  InputHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction,
  CSSProperties,
} from "react";
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
  Omit<InputHTMLAttributes<HTMLInputElement>, "type">,
  CheckboxOption & {
    id: string;
    size?: CheckboxSize;
    inline?: boolean;
    style?: CSSProperties;
  }
>;

const Checkbox: ForwardRefRenderFunction<HTMLDivElement, CheckboxProps> = (props, ref) => {
  const { id, label, size = "md", inline = false, style, ...rest } = props;

  return (
    <div
      ref={ref}
      css={(theme): SerializedStyles => checkboxContainer(theme, { size, inline })}
      className="checkbox-container"
      style={style}
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
