import React, { ForwardRefRenderFunction, forwardRef } from "react";
import {
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
import CreatableSelect from "react-select/creatable";
import { SerializedStyles } from "@emotion/react";
import classNames from "classnames";
import Label from "../Label/Label";
import { inputHeight } from "../styles";
import { selectContainer } from "./styles";
import CustomMenuList from "./components/CustomMenuList";
import { CustomOption, CustomSelectProps } from "./types";
import { formElements, scrollbar } from "@theme/default/config";

const MAX_MENU_HEIGHT = 300;
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
    size = "md",
    status = "valid",
    hasInnerSearch = false,
    isMulti = false,
    maxMenuHeight = MAX_MENU_HEIGHT,
    minWidth = MIN_WIDTH,
    maxWidth = MAX_WIDTH,
    ...rest
  } = props;
  const hasLabel = Boolean(label);

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
      backgroundColor: isSelected
        ? formElements.input.borderFocus
        : !isFocused
        ? "transparent"
        : formElements.input.hoverColor,
      color: isSelected ? formElements.input.textColorFocused : "inherit",
      borderRadius: hasInnerSearch ? "5px" : "none",
      "&:hover": {
        color: isSelected ? formElements.input.textColorFocused : formElements.input.textColor,
        backgroundColor: isFocused
          ? !isSelected
            ? formElements.input.hoverColor
            : formElements.input.borderFocus
          : "transparent",
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

  return (
    <div
      css={(theme): SerializedStyles =>
        selectContainer(theme, {
          size,
          minWidth,
          maxWidth,
          inline: false,
          isInlineFlex: false,
          hasInnerSearch: false,
        })
      }
    >
      {hasLabel && (
        <Label htmlFor={id} aria-labelledby={id}>
          {label}
        </Label>
      )}
      <div className="select-input-wrapper" data-testid="custom-react-select">
        <CreatableSelect
          {...rest}
          ref={forwardedRef}
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
          }}
          maxMenuHeight={maxMenuHeight}
          styles={styles}
          menuIsOpen={true}
        />
      </div>
    </div>
  );
};

export default forwardRef(Select);
