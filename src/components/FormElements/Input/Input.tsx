import React, { forwardRef, Ref, ForwardRefRenderFunction, InputHTMLAttributes, FC } from "react";
import classNames from "classnames";
import { SerializedStyles } from "@emotion/react";
import { inputContainer, inputError } from "./styles";
import { Label } from "@components";
import { ExtendableProps, IconType } from "types/common";

export type InputSize = "md" | "lg";

export type InputProps = ExtendableProps<
  InputHTMLAttributes<HTMLInputElement>,
  {
    id: string;
    status?: "valid" | "error";
    size?: InputSize;
    iconBefore?: IconType;
    iconAfter?: IconType;
    ref?: Ref<HTMLInputElement>;
    label?: string;
    inline?: boolean;
    error?: string;
  }
>;

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (props, forwardedRef) => {
  const {
    size = "md",
    status = "valid",
    iconBefore,
    iconAfter,
    label,
    inline = false,
    id,
    className,
    error,
    ...rest
  } = props;
  const IconBefore = iconBefore;
  const IconAfter = iconAfter;
  const hasLabel = Boolean(label);
  const containerClasses = classNames({
    valid: status === "valid",
    error: status === "error",
    "with-prefix-icon": Boolean(iconBefore),
    "with-suffix-icon": Boolean(iconAfter),
    inline: hasLabel && inline,
    [className ?? ""]: className,
  });

  return (
    <div
      css={(theme): SerializedStyles => inputContainer(theme, { size })}
      className={containerClasses}
    >
      {hasLabel && <Label htmlFor={id}>{label}</Label>}
      <div className="input-wrapper">
        {IconBefore && (
          <span className="prefix-icon" data-testid="input-icon-before">
            <IconBefore height={32} />
          </span>
        )}
        <input
          ref={forwardedRef}
          id={id}
          {...rest}
          aria-describedby={error ? `${id}-inline-error` : ""}
        />
        {IconAfter && (
          <span className="suffix-icon" data-testid="input-icon-after">
            <IconAfter height={32} />
          </span>
        )}
      </div>
      {error && <Error id={`${id}-inline-error`}>{error}</Error>}
    </div>
  );
};

type ErrorProps = {
  id: string;
};

const Error: FC<ErrorProps> = ({ id, children }) => (
  <span css={inputError} id={id}>
    {children}
  </span>
);

export default forwardRef(Input);
