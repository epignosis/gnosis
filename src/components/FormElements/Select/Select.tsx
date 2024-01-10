// Inspired by this https://codesandbox.io/embed/m75wlyx3oy
import React, {
  ForwardRefRenderFunction,
  PropsWithChildren,
  forwardRef,
  isValidElement,
  useRef,
  useState,
} from "react";
import classNames from "classnames";
import ReactSelect, {
  ActionMeta,
  GroupBase,
  MultiValue,
  SelectInstance,
  SingleValue,
  ValueContainerProps,
} from "react-select";
import { SerializedStyles } from "@emotion/react";
import CreatableSelect from "react-select/creatable";
import { useClickAway } from "ahooks";
import Label from "../Label/Label";
import Tooltip from "../../Tooltip/Tooltip";
import { AddOperatorSVG, InfoCircledSVG } from "../../../icons";
import CustomValueContainer from "./components/CustomValueContainer";
import { resolveStyles, selectContainer } from "./styles";
import CustomMenuList from "./components/CustomMenuList";
import { CustomOption, CustomSelectProps } from "./types";
import {
  MAX_MENU_HEIGHT,
  INNER_PLACEHOLDER,
  MIN_WIDTH,
  MAX_WIDTH,
  OUTER_PLACEHOLDER,
} from "./constants";
import { containerClassNames } from "./helpers";

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
    hasInnerSearch = false,
    isMulti = false,
    creatableTooltip = "Create",
    maxMenuHeight = MAX_MENU_HEIGHT,
    innerPlaceholder = INNER_PLACEHOLDER,
    minWidth = MIN_WIDTH,
    maxWidth = MAX_WIDTH,
    placeholder: outerPlaceholder = OUTER_PLACEHOLDER,
    tooltipContent = "",
    onChange,
    isInputValid,
    checkIfInputIsSelected,
    ...rest
  } = props;
  const hasLabel = Boolean(label);

  const containerRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const labelClassname = classNames({
    required,
  });

  const countOptions = () => {
    // Count the number of options, including nested options if exists
    return options.reduce((count, option) => {
      return count + ("options" in option ? option.options.length : 1);
    }, 0);
  };

  const shouldShowInnerSearch = () => {
    // Force show inner search if the number of options exceeds 10 or certain conditions are met
    const isAsyncType = type === "async";
    const hasManyOptions = countOptions() > 10;

    return isAsyncType || hasManyOptions || hasInnerSearch;
  };

  const innerSearchEnabled = shouldShowInnerSearch();
  const shouldRenderTooltip =
    (tooltipContent && typeof tooltipContent === "string" && tooltipContent !== "") ||
    isValidElement(tooltipContent);

  const styles = resolveStyles(size, hasInnerSearch);

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
    blurInputOnSelect: !isMulti,
    closeMenuOnSelect: !isMulti,
    isMulti,
    classNames: {
      control: ({ isFocused }: { isFocused: boolean }) =>
        containerClassNames(status, size, isFocused),
      option: ({ isSelected }: { isSelected: boolean }) =>
        `${isSelected ? "selected" : ""} option-${size}`,
    },
    components: {
      IndicatorSeparator: () => null,
      MenuList: CustomMenuList,
      ValueContainer: (
        props: PropsWithChildren<
          ValueContainerProps<CustomOption, boolean, GroupBase<CustomOption>>
        >,
      ) => CustomValueContainer({ ...props, isFocused }),
    },
    formatCreateLabel,
    isSearchable: false,
    maxMenuHeight,
    menuIsOpen: isFocused || undefined,
    options,
    placeholder: outerPlaceholder,
    inputValue: inputValue,
    onMenuInputFocus: () => setIsFocused(true),
    onMouseDown: (e: MouseEvent) => e.stopPropagation(),
    innerPlaceholder,
    hasInnerSearch: innerSearchEnabled,
    type,
    onChange: (
      option: MultiValue<CustomOption> | SingleValue<CustomOption>,
      action: ActionMeta<CustomOption>,
    ) => {
      setIsFocused(false);
      onChange && onChange(option, action);
    },
    onInputChange: (val: string) => setInputValue(val),
    isValidNewOption: isInputValid,
    noOptionsMessage: () => checkIfInputIsSelected && checkIfInputIsSelected(inputValue),
  };

  useClickAway(
    (e) => {
      // Ignore clicks on the close icon, can be one of the three following:
      const { nodeName, className } = e.target as HTMLElement;
      const isSvg = nodeName === "svg";
      const isPath = nodeName === "path";
      const isCloseIcon = className === "close-icon";

      if (isSvg || isPath || isCloseIcon) return;
      setIsFocused(false);
      setInputValue("");
    },

    [containerRef],
  );

  return (
    <div
      css={(theme): SerializedStyles =>
        selectContainer(theme, {
          size,
          inline,
          isInlineFlex,
          minWidth,
          maxWidth,
          hasInnerSearch,
        })
      }
    >
      {hasLabel && (
        <div className="label-container">
          <Label htmlFor={id} aria-labelledby={id} className={labelClassname}>
            {label}
          </Label>
          {shouldRenderTooltip && (
            <Tooltip content={tooltipContent}>
              <InfoCircledSVG height={20} />
            </Tooltip>
          )}
        </div>
      )}

      <div className="select-input-wrapper" data-testid="custom-react-select" ref={containerRef}>
        {type === "creatable" ? (
          <CreatableSelect {...customSelectProps} createOptionPosition="first" />
        ) : (
          <ReactSelect {...customSelectProps} />
        )}
      </div>
    </div>
  );
};

export default forwardRef(Select);
