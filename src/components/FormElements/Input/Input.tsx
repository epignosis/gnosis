import React, { forwardRef, Ref, ForwardRefRenderFunction } from "react";
import classNames from "classnames";
import { SerializedStyles } from "@emotion/react";
import Label from "../Label/Label";
import { inputContainer } from "./styles";
import { ExtendableProps, IconType } from "types/common";

export type InputSize = "md" | "lg";

export type InputProps = ExtendableProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  {
    id: string;
    status?: "valid" | "error";
    size?: InputSize;
    iconBefore?: IconType;
    iconAfter?: IconType;
    ref?: Ref<HTMLInputElement>;
    label?: string;
    inline?: boolean;
    containerAttrs?: React.HTMLAttributes<HTMLDivElement>;
    disabled?: boolean;
  }
>;

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    size = "md",
    status = "valid",
    iconBefore,
    iconAfter,
    label,
    inline = false,
    id,
    containerAttrs,
    ...rest
  },
  forwardedRef,
) => {
  const IconBefore = iconBefore;
  const IconAfter = iconAfter;
  const hasLabel = Boolean(label);
  const containerClasses = classNames({
    valid: status === "valid",
    error: status === "error",
    "with-prefix-icon": Boolean(iconBefore),
    "with-suffix-icon": Boolean(iconAfter),
    inline: hasLabel && inline,
    disabled: Boolean(rest?.disabled),
  });

  return (
    <div
      css={(theme): SerializedStyles => inputContainer(theme, { size })}
      className={containerClasses}
      {...containerAttrs}
    >
      {hasLabel && <Label htmlFor={id}>{label}</Label>}
      <div className="input-wrapper">
        {IconBefore && (
          <span className="prefix-icon" data-testid="input-icon-before">
            <IconBefore height={32} />
          </span>
        )}
        <input ref={forwardedRef} id={id} {...rest} />
        {IconAfter && (
          <span className="suffix-icon" data-testid="input-icon-after">
            <IconAfter height={32} />
          </span>
        )}
      </div>
    </div>
  );
};

export default forwardRef(Input);
