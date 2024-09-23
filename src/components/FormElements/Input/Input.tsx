import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
  useRef,
  MouseEvent,
  useEffect,
  isValidElement,
  ReactElement,
} from "react";
import classNames from "classnames";
import { SerializedStyles } from "@emotion/react";
import Label from "../Label/Label";
import { InfoCircledSVG, CloseSVG } from "../../../icons/index";
import Tooltip from "../../Tooltip/Tooltip";
import { inputContainer } from "./styles";
import { preventNonNumericalInput } from "./helpers";
import { ExtendableProps, IconType } from "types/common";

export type InputSize = "sm" | "md" | "lg";

export type InputProps = ExtendableProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  {
    id: string;
    status?: "valid" | "error";
    size?: InputSize;
    required?: boolean;
    iconBefore?: IconType;
    iconAfter?: IconType;
    label?: string;
    inline?: boolean;
    containerAttrs?: React.HTMLAttributes<HTMLDivElement>;
    css?: SerializedStyles;
    tooltipContent?: string | JSX.Element;
    toolTipIcon?: ReactElement;
    showVerticalLine?: boolean;
    isClearable?: boolean;
    autoFocus?: boolean;
    onClear?: (e?: MouseEvent<HTMLDivElement>) => void;
  }
>;

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    size = "md",
    status = "valid",
    required = false,
    iconBefore,
    iconAfter,
    label,
    inline = false,
    id,
    containerAttrs,
    tooltipContent = "",
    toolTipIcon,
    value,
    isClearable = false,
    showVerticalLine = true,
    onClear,
    autoFocus = false,
    type,
    ...rest
  },
  forwardedRef,
) => {
  const internalRef = useRef<HTMLInputElement>(null);

  const isNumberType = type === "number";
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

  const labelClassname = classNames({
    required,
  });
  const iconHeight = size === "sm" ? 28 : 32;

  useImperativeHandle<HTMLInputElement | null, HTMLInputElement | null>(
    forwardedRef,
    () => internalRef.current,
  );

  const setFocus = () => {
    internalRef.current?.focus();
  };

  useEffect(() => {
    autoFocus && internalRef.current?.focus();
  }, [autoFocus]);

  const handleClear = (e: MouseEvent<HTMLDivElement>) => {
    if (onClear) onClear(e);
    setFocus();
  };

  const shouldRenderTooltip =
    (tooltipContent && typeof tooltipContent === "string" && tooltipContent !== "") ||
    isValidElement(tooltipContent);

  return (
    <div
      css={(theme): SerializedStyles =>
        inputContainer(theme, {
          size,
          hasIconAfter: Boolean(iconAfter),
          isClearable,
          showVerticalLine,
        })
      }
      className={containerClasses}
      {...containerAttrs}
    >
      {hasLabel && (
        <div className="label-container">
          <Label htmlFor={id} className={labelClassname} data-testid={`${id}-label`}>
            {label}
          </Label>
          {shouldRenderTooltip && (
            <div data-testid={`${id}-tooltip`}>
              <Tooltip content={tooltipContent}>
                {toolTipIcon || <InfoCircledSVG height={20} />}
              </Tooltip>
            </div>
          )}
        </div>
      )}
      <div className="input-wrapper">
        {IconBefore && (
          <span className="prefix-icon" data-testid="input-icon-before">
            <IconBefore height={iconHeight} />
          </span>
        )}
        <input
          value={value}
          ref={internalRef}
          id={id}
          onKeyDown={(e): void => preventNonNumericalInput(e, isNumberType)}
          type={type}
          data-testid={`${id}-input`}
          {...rest}
        />
        {IconAfter && (
          <>
            {showVerticalLine && <div className="vertical-line" />}
            <span className="suffix-icon" data-testid="input-icon-after" onClick={setFocus}>
              <IconAfter height={iconHeight} />
            </span>
          </>
        )}
        {isClearable && value && (
          <div className="close-icon" onClick={(e: MouseEvent<HTMLDivElement>) => handleClear(e)}>
            <CloseSVG height={16} />
          </div>
        )}
      </div>
    </div>
  );
};

export default forwardRef(Input);
