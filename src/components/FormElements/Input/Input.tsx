import React, { forwardRef, Ref, ForwardRefRenderFunction } from "react";
import classNames from "classnames";
import { SerializedStyles } from "@emotion/react";
import Label from "../Label/Label";
import { InfoCircledSVG } from "../../../icons/index";
import Tooltip from "../../Tooltip/Tooltip";
import { inputContainer } from "./styles";
import { ExtendableProps, IconType } from "types/common";

export type InputSize = "sm" | "md" | "lg";

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
    css?: SerializedStyles;
    tooltipContent?: string;
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
    tooltipContent = "",
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
  const iconHeight = size === "sm" ? 28 : 32;

  return (
    <div
      css={(theme): SerializedStyles => inputContainer(theme, { size })}
      className={containerClasses}
      {...containerAttrs}
    >
      {hasLabel && (
        <div className="label-container">
          <Label htmlFor={id} margin={false}>
            {label}
          </Label>
          {tooltipContent.length > 0 && (
            <Tooltip content={tooltipContent}>
              <InfoCircledSVG height={20} />
            </Tooltip>
          )}
        </div>
      )}
      <div className="input-wrapper">
        {IconBefore && (
          <span className="prefix-icon" data-testid="input-icon-before">
            <IconBefore height={iconHeight} />
          </span>
        )}
        <input ref={forwardedRef} id={id} {...rest} />
        {IconAfter && (
          <span className="suffix-icon" data-testid="input-icon-after">
            <IconAfter height={iconHeight} />
          </span>
        )}
      </div>
    </div>
  );
};

export default forwardRef(Input);
