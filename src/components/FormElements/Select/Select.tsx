// Inspired by this https://codesandbox.io/embed/m75wlyx3oy

import React, { ForwardRefRenderFunction, forwardRef, useEffect, useRef, useState } from "react";
import ReactSelect, { SelectInstance } from "react-select";
import { SerializedStyles } from "@emotion/react";
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

const Select: ForwardRefRenderFunction<
  SelectInstance<CustomOption>,
  CustomSelectProps<CustomOption>
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

  const onDomClick = (e: MouseEvent) => {
    const menu = containerRef.current?.querySelector(".select__menu");

    if (
      !containerRef.current?.contains(e.target as Node) ||
      !menu ||
      !menu.contains(e.target as Node)
    ) {
      setIsFocused(false);
      setInputValue("");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", onDomClick);

    return () => {
      document.removeEventListener("mousedown", onDomClick);
    };
  }, []);

  const containerClassNames = classNames({
    valid: status === "valid",
    error: status === "error",
  });

  return (
    <div
      css={(theme): SerializedStyles => selectContainer(theme, { size, inline })}
      ref={containerRef}
    >
      {hasLabel && (
        <Label htmlFor={id} aria-labelledby={id}>
          {label}
        </Label>
      )}
      <div className="select-input-wrapper" data-testid="custom-react-select">
        <ReactSelect
          {...rest}
          placeholder={outerPlaceholder}
          ref={forwardedRef}
          options={options}
          isSearchable={false}
          maxMenuHeight={maxMenuHeight}
          classNames={{
            control: () => `control-${size} ${containerClassNames}`,
            option: () => `option-${size}`,
          }}
          styles={{
            dropdownIndicator: (base, state) => ({
              ...base,
              transform: state.selectProps.menuIsOpen ? "rotate(-180deg)" : "rotate(0)",
            }),
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: state.isFocused
                ? formElements.input.borderFocusColor
                : baseStyles.borderColor,
              ":hover": { borderColor: formElements.input.borderFocusColor },
            }),
          }}
          components={{
            IndicatorSeparator: () => null,
            MenuList: CustomMenuList,
            ValueContainer: (props) => CustomValueContainer({ ...props, isFocused }),
          }}
          {...{
            onMenuInputFocus: () => setIsFocused(true),
            onMouseDown: (e: MouseEvent) => e.stopPropagation(),
          }}
          menuIsOpen={isFocused || undefined}
          inputValue={inputValue}
          onChange={() => setIsFocused(false)}
          onInputChange={(val) => {
            setInputValue(val);
          }}
          blurInputOnSelect={true}
          innerPlaceholder={innerPlaceholder}
          hasInnerSearch={hasInnerSearch}
        />
      </div>
    </div>
  );
};

export default forwardRef(Select);
