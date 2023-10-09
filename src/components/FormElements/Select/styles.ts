import { css, SerializedStyles, Theme } from "@emotion/react";
import {
  CSSObjectWithLabel,
  ClearIndicatorProps,
  ControlProps,
  DropdownIndicatorProps,
  GroupBase,
  MultiValueProps,
  OptionProps,
  PlaceholderProps,
  StylesConfig,
} from "react-select";
import { InputSize } from "../Input/Input";
import { inputHeight } from "../styles";
import { CustomOption } from "./types";
import { formElements, scrollbar } from "@theme/default/config";

export const selectContainer = (
  { formElements }: Theme,
  {
    size,
    inline,
    isInlineFlex,
    minWidth,
    maxWidth,
    hasInnerSearch,
  }: {
    size: InputSize;
    inline: boolean;
    isInlineFlex: boolean;
    minWidth: string;
    maxWidth: string;
    hasInnerSearch: boolean;
  },
): SerializedStyles => css`
  display: ${isInlineFlex ? "inline-flex" : "flex"};
  flex-direction: ${inline ? "row" : "column"};
  gap: ${inline ? "1rem" : "0.5rem"};
  align-items: ${inline ? "center" : "normal"};

  label {
    margin: 0;

    &.required::after {
      content: " *";
      color: ${formElements.generic.required};
    }
  }

  .select-create-label {
    display: flex;
    justify-content: space-between;
    padding-inline-end: 1rem;
    color: ${formElements.input.borderFocusColor};
    background-color: ${formElements.input.backgroundFocus};

    /* We do this to remove padding from the parent, this way we change background color */
    margin: -0.3125rem -1rem;
    padding: 0.3125rem 1rem;
    padding-inline-end: 2rem; // to align plus icon with X icon

    &:hover {
      background-color: ${formElements.input.background};
    }
    svg {
      color: ${formElements.input.borderFocusColor};

      line-height: 0;
    }
  }

  .select-input-wrapper {
    min-width: ${minWidth};
    max-width: ${maxWidth};
    flex-grow: 1;
    background-color: ${formElements.input.background};
    border-radius: 0.3125rem;

    .error {
      border-color: ${formElements.errors.errorBorderColor};
    }

    .control-${size} {
      /* minus border */
      min-height: calc(${inputHeight[size]} - 2px);
    }

    .option-${size} {
      padding: 0.3125rem 1rem;
      cursor: pointer;
      word-break: break-word;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding-inline-end: ${hasInnerSearch ? "0" : "1rem"};
      width: auto;
    }
  }
`;

export const customMenuList = ({
  hasInnerSearch,
}: {
  hasInnerSearch: boolean;
}): SerializedStyles => css`
  padding: ${hasInnerSearch ? "0.75rem" : "0"};

  .loader-container {
    margin-top: 1rem;
  }

  .text-container {
    margin-top: 1rem;
  }
`;

export const resolveStyles = (
  size: string,
  hasInnerSearch: boolean,
): StylesConfig<CustomOption> => ({
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
    marginTop: "0.5rem",
    marginBottom: hasInnerSearch ? "0" : "0.5rem",
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
});
