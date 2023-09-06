// Inspired by this https://codesandbox.io/embed/m75wlyx3oy

import React, { ForwardRefRenderFunction, forwardRef, useRef, useState } from "react";
import ReactSelect, {
  CSSObjectWithLabel,
  ClearIndicatorProps,
  ControlProps,
  DropdownIndicatorProps,
  GroupBase,
  MultiValueProps,
  OptionProps,
  PlaceholderProps,
  SelectInstance,
} from "react-select";
import { SerializedStyles } from "@emotion/react";
import { useClickAway } from "ahooks";
import classNames from "classnames";
import Label from "../Label/Label";
import { inputHeight } from "../styles";
import CustomValueContainer from "./components/CustomValueContainer";
import { selectContainer } from "./styles";
import CustomMenuList from "./components/CustomMenuList";
import { CustomOption, CustomSelectProps } from "./types";
import { formElements, scrollbar } from "@theme/default/config";

const MAX_MENU_HEIGHT = 300;
const OUTER_PLACEHOLDER = "Select...";
const INNER_PLACEHOLDER = "Search...";
const MIN_WIDTH = "5rem";
const MAX_WIDTH = "25rem";

const containerClassNames = (status: string, size: string) =>
  classNames({
    [`control-${size}`]: true,
    valid: status === "valid",
    error: status === "error",
  });

const Select: ForwardRefRenderFunction<
  SelectInstance<CustomOption>,
  CustomSelectProps<CustomOption, boolean>
> = (props, forwardedRef) => {
  const {
    id = "",
    label,
    options = [],
    size = "md",
    inline = false,
    status = "valid",
    isInlineFlex = false,
    hasInnerSearch = false,
    isMulti = false,
    maxMenuHeight = MAX_MENU_HEIGHT,
    innerPlaceholder = INNER_PLACEHOLDER,
    minWidth = MIN_WIDTH,
    maxWidth = MAX_WIDTH,
    placeholder: outerPlaceholder = OUTER_PLACEHOLDER,
    onChange,
    ...rest
  } = props;
  const hasLabel = Boolean(label);

  const containerRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const styles = {
    menu: (base: CSSObjectWithLabel) => {
      return {
        ...base,
        zIndex: 1060,
      };
    },
    placeholder: (
      base: CSSObjectWithLabel,
      { isDisabled }: PlaceholderProps<CustomOption, boolean, GroupBase<CustomOption>>,
    ) => {
      return {
        ...base,
        fontStyle: "italic",
        color: isDisabled ? formElements.input.disabledColor : formElements.input.placeholderColor,
      };
    },
    dropdownIndicator: (
      base: CSSObjectWithLabel,
      { selectProps }: DropdownIndicatorProps<CustomOption, boolean, GroupBase<CustomOption>>,
    ) => ({
      ...base,
      transform: selectProps.menuIsOpen ? "rotate(-180deg)" : "rotate(0)",
      transition: "all .2s ease",
      color: selectProps.isDisabled ? base.color : formElements.input.iconColor,
      "&:hover": { color: formElements.input.iconHoverColor, cursor: "pointer" },
    }),
    clearIndicator: (
      base: CSSObjectWithLabel,
      { selectProps }: ClearIndicatorProps<CustomOption, boolean, GroupBase<CustomOption>>,
    ) => ({
      ...base,
      color: selectProps.isDisabled ? base.color : formElements.input.iconColor,
      "&:hover": { color: formElements.input.iconHoverColor, cursor: "pointer" },
    }),
    control: (
      base: CSSObjectWithLabel,
      { isFocused, isDisabled }: ControlProps<CustomOption, boolean, GroupBase<CustomOption>>,
    ) => {
      const border = isDisabled
        ? `1px solid ${formElements.input.disabledBorder}`
        : isFocused
        ? `1px solid ${formElements.input.borderFocusColor}`
        : // default case, set border equal to the background color to avoid pixel shift
          `1px solid ${formElements.input.background}`;
      const backgroundColor = isDisabled
        ? formElements.input.disabledBackground
        : isFocused
        ? formElements.input.backgroundFocus
        : formElements.input.background;

      return {
        ...base,
        border,
        backgroundColor,
        boxShadow: "none",
        borderRadius: "5px",
        "&:hover": { border: `1px solid ${formElements.input.borderHoverColor}` },
        color: !isDisabled ? base.color : formElements.input.disabledColor,
      };
    },
    multiValueLabel: (
      base: CSSObjectWithLabel,
      { isDisabled }: MultiValueProps<CustomOption, boolean, GroupBase<CustomOption>>,
    ) => ({
      ...base,
      color: !isDisabled ? base.color : formElements.input.disabledColor,
    }),

    multiValueRemove: (base: CSSObjectWithLabel) => ({
      ...base,
      ":hover": {
        cursor: "pointer",
        color: formElements.input.iconHoverColor,
      },
    }),
    option: (
      base: CSSObjectWithLabel,
      { isSelected, isFocused }: OptionProps<CustomOption, boolean, GroupBase<CustomOption>>,
    ) => ({
      ...base,
      backgroundColor: isSelected || isFocused ? formElements.input.borderFocus : base.color,
      color: isSelected || isFocused ? formElements.input.textColorFocused : "inherit",
      borderRadius: hasInnerSearch ? "5px" : "none",
      "&:hover": {
        color: isSelected ? formElements.input.textColorFocused : formElements.input.textColor,
        backgroundColor: !isSelected
          ? formElements.input.hoverColor
          : formElements.input.borderFocus,
      },
    }),
    menuList: (base: CSSObjectWithLabel) => ({
      ...base,
      margin: "0.5rem 0",
      padding: "0",
      "::-webkit-scrollbar": {
        width: "5px",
      },
      "::-webkit-scrollbar-track": {
        background: scrollbar.background,
        borderRadius: "10px",
      },
      "::-webkit-scrollbar-thumb": {
        backgroundColor: scrollbar.color,
        borderRadius: "10px",
      },
    }),
    indicatorsContainer: (base: CSSObjectWithLabel) => ({
      ...base,
      // it is important to set the indicator size to the same height as the input to avoid centering issues
      height: `calc(${inputHeight[size]} - 2px)`,
    }),
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
        selectContainer(theme, { size, inline, isInlineFlex, minWidth, maxWidth, hasInnerSearch })
      }
    >
      {hasLabel && (
        <Label htmlFor={id} aria-labelledby={id}>
          {label}
        </Label>
      )}
      <div className="select-input-wrapper" data-testid="custom-react-select" ref={containerRef}>
        <ReactSelect
          {...rest}
          ref={forwardedRef}
          // react-select props
          blurInputOnSelect={!isMulti}
          closeMenuOnSelect={!isMulti}
          isMulti={isMulti}
          classNames={{
            control: () => containerClassNames(status, size),
            option: () => `option-${size}`,
          }}
          components={{
            IndicatorSeparator: () => null,
            MenuList: CustomMenuList,
            ValueContainer: (props) => CustomValueContainer({ ...props, isFocused }),
          }}
          isSearchable={false}
          maxMenuHeight={maxMenuHeight}
          menuIsOpen={isFocused || undefined}
          options={options}
          placeholder={outerPlaceholder}
          styles={styles}
          inputValue={inputValue}
          // custom props
          {...{
            onMenuInputFocus: () => setIsFocused(true),
            onMouseDown: (e: MouseEvent) => e.stopPropagation(),
            innerPlaceholder,
            hasInnerSearch,
          }}
          // events
          onChange={(option, action) => {
            setIsFocused(false);
            onChange && onChange(option, action);
          }}
          onInputChange={(val) => setInputValue(val)}
        />
      </div>
    </div>
  );
};

export default forwardRef(Select);
