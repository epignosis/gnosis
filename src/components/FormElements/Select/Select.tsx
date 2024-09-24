import React, { ForwardRefRenderFunction, forwardRef, isValidElement, useRef } from "react";
import classNames from "classnames";
import { ActionMeta, MultiValue, SelectInstance, SingleValue } from "react-select";
import { SerializedStyles } from "@emotion/react";
import { AddOperatorSVG, InfoCircledSVG } from "../../../icons";
import Label from "../Label/Label";
import Tooltip from "../../Tooltip/Tooltip";
import { resolveStyles, selectContainer } from "./styles";
import { CustomOption, CustomSelectProps } from "./types";
import { MAX_MENU_HEIGHT, MIN_WIDTH, MAX_WIDTH, PLACEHOLDER } from "./constants";
import { containerClassNames, renderSelect } from "./helpers";
import CustomMultiValueLabel from "./components/CustomMultiValueLabel";
import CustomSingleValue from "./components/CustomSingleValue";
import CustomOptionComponent from "./components/CustomOptionComponent";

const Select: ForwardRefRenderFunction<
  SelectInstance<CustomOption>,
  CustomSelectProps<CustomOption, boolean>
> = (props, forwardedRef) => {
  const {
    id = "",
    type = "select",
    required = false,
    label = "",
    options = [],
    size = "md",
    inline = false,
    status = "valid",
    isInlineFlex = false,
    isMulti = false,
    creatableTooltip = "Create",
    maxMenuHeight = MAX_MENU_HEIGHT,
    minWidth = MIN_WIDTH,
    maxWidth = MAX_WIDTH,
    placeholder = PLACEHOLDER,
    tooltipContent = "",
    minNumberOfOptionsToEnableSearch = 10,
    isValidNewOption,
    menuMaxWidth,
    onChange,
    loadOptions,
    isSearchable,
    ...rest
  } = props;

  const hasLabel = Boolean(label);
  const containerRef = useRef<HTMLInputElement>(null);
  const labelClassname = classNames({
    required,
  });

  const countOptions = () => {
    // Count the number of options, including nested options if exists
    return options.reduce((count, option) => {
      return count + ("options" in option ? option.options.length : 1);
    }, 0);
  };

  const isSelectSearchable = () => {
    if (isSearchable !== undefined) {
      return isSearchable;
    }

    const isAsyncType = type === "async";
    const hasManyOptions = countOptions() > minNumberOfOptionsToEnableSearch;
    return isAsyncType || hasManyOptions;
  };

  const shouldRenderTooltip =
    (tooltipContent && typeof tooltipContent === "string" && tooltipContent !== "") ||
    isValidElement(tooltipContent);

  const styles = resolveStyles({ size, menuMaxWidth });

  const formatCreateLabel = (inputValue: string) => (
    <div>
      <Tooltip content={creatableTooltip}>
        <div className="select-create-label">
          <span>{inputValue} </span>
          <span>
            <AddOperatorSVG color="black" height={12} />
          </span>
        </div>
      </Tooltip>
    </div>
  );

  const customSelectProps = {
    ...rest,
    ref: forwardedRef,
    styles,
    isMulti,
    classNames: {
      control: () => containerClassNames(status, size),
      option: ({ isSelected }: { isSelected: boolean }) =>
        `${isSelected ? "selected" : ""} option-${size}`,
    },
    components: {
      IndicatorSeparator: () => null,
      Option: CustomOptionComponent,
      SingleValue: CustomSingleValue,
      MultiValueLabel: CustomMultiValueLabel,
    },
    formatCreateLabel,
    isSearchable: isSelectSearchable(),
    maxMenuHeight,
    options,
    placeholder,
    type,
    isValidNewOption,
    loadOptions,
    onMouseDown: (e: MouseEvent) => e.stopPropagation(),
    onChange: (
      option: MultiValue<CustomOption> | SingleValue<CustomOption>,
      action: ActionMeta<CustomOption>,
    ) => {
      onChange?.(option, action);
    },
    isOptionDisabled: (option: CustomOption): boolean => Boolean(option.disabled),
  };

  return (
    <div
      css={(theme): SerializedStyles =>
        selectContainer(theme, {
          size,
          inline,
          isInlineFlex,
          minWidth,
          maxWidth,
        })
      }
    >
      {hasLabel && (
        <div className="label-container">
          <Label
            htmlFor={id}
            aria-labelledby={id}
            data-testid={`${id}-label`}
            className={labelClassname}
          >
            {label}
          </Label>
          {shouldRenderTooltip && (
            <div data-testid={`${id}-tooltip`}>
              <Tooltip content={tooltipContent}>
                <InfoCircledSVG height={20} />
              </Tooltip>
            </div>
          )}
        </div>
      )}
      <div className="select-input-wrapper" data-testid={`${id}-select`} ref={containerRef}>
        {renderSelect(type, customSelectProps)}
      </div>
    </div>
  );
};

export default forwardRef(Select);
