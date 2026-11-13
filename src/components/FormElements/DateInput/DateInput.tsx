import React, { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes } from "react";
import { SerializedStyles } from "@emotion/react";
import classNames from "classnames";
import Label from "../Label/Label";
import { InputSize } from "../Input/Input";
import { dateInputContainer } from "./styles";
import { ExtendableProps } from "types/common";

export type DateInputProps = ExtendableProps<
  Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size">,
  {
    id: string;
    label?: string;
    required?: boolean;
    inline?: boolean;
    size?: InputSize;
    status?: "valid" | "error";
    containerAttrs?: React.HTMLAttributes<HTMLDivElement>;
  }
>;

const DateInput: ForwardRefRenderFunction<HTMLInputElement, DateInputProps> = (
  props,
  forwardedRef,
) => {
  const {
    label,
    required = false,
    inline = false,
    id,
    size = "md",
    status = "valid",
    containerAttrs,
    ...rest
  } = props;
  const hasLabel = Boolean(label);
  const containerClassNames = classNames({
    inline: hasLabel && inline,
    valid: status === "valid",
    error: status === "error",
    [containerAttrs?.className ?? ""]: Boolean(containerAttrs?.className),
  });

  const labelClassNames = classNames({ required });

  return (
    <div
      css={(theme): SerializedStyles => dateInputContainer(theme, { size })}
      {...containerAttrs}
      className={containerClassNames}
    >
      {hasLabel && (
        <Label htmlFor={id} className={labelClassNames} data-testid={`date-input-label-${id}`}>
          {label}
        </Label>
      )}
      <input type="date" id={id} ref={forwardedRef} required={required} {...rest} />
    </div>
  );
};

export default forwardRef(DateInput);
