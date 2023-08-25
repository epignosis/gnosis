// Inspired by this https://codesandbox.io/embed/m75wlyx3oy

import React, { ForwardRefRenderFunction, forwardRef, useRef, useState } from "react";
import ReactSelect, {
  CSSObjectWithLabel,
  ClearIndicatorProps,
  ControlProps,
  DropdownIndicatorProps,
  GroupBase,
  SelectInstance,
} from "react-select";
import { SerializedStyles } from "@emotion/react";
import { useClickAway } from "ahooks";
import classNames from "classnames";
import Label from "../Label/Label";
import CustomValueContainer from "./components/CustomValueContainer";
import { selectContainer } from "./styles";
import CustomMenuList from "./components/CustomMenuList";
import { CustomOption, CustomSelectProps } from "./types";
import { formElements } from "@theme/default/config";

const MAX_MENU_HEIGHT = 300;
const OUTER_PLACEHOLDER = "Select...";
const INNER_PLACEHOLDER = "Search...";

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
    maxMenuHeight = MAX_MENU_HEIGHT,
    hasInnerSearch = false,
    innerPlaceholder = INNER_PLACEHOLDER,
    placeholder: outerPlaceholder = OUTER_PLACEHOLDER,
    ...rest
  } = props;
  const hasLabel = Boolean(label);

  const containerRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const styles = {
    placeholder: (base: CSSObjectWithLabel) => {
      return {
        ...base,
        fontStyle: "italic",
        color: formElements.input.placeholderColor,
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
      "&:hover": { color: formElements.input.iconColor },
    }),
    clearIndicator: (
      base: CSSObjectWithLabel,
      { selectProps }: ClearIndicatorProps<CustomOption, boolean, GroupBase<CustomOption>>,
    ) => ({
      ...base,
      color: selectProps.isDisabled ? base.color : formElements.input.iconColor,
      "&:hover": { color: formElements.input.iconColor },
    }),
    control: (
      baseStyles: CSSObjectWithLabel,
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
        ...baseStyles,
        border,
        backgroundColor,
        boxShadow: "none",
        borderRadius: "5px",
        "&:hover": { border: `1px solid ${formElements.input.borderHoverColor}` },
      };
    },
  };

  useClickAway(
    (e) => {
      // Ignore clicks on the close icon, can be one of the 3 following:
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
    <div css={(theme): SerializedStyles => selectContainer(theme, { size, inline })}>
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
          blurInputOnSelect={true}
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
          onChange={() => setIsFocused(false)}
          onInputChange={(val) => setInputValue(val)}
        />
      </div>
    </div>
  );
};

export default forwardRef(Select);
