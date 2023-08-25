// Inspired by this https://codesandbox.io/embed/m75wlyx3oy

import React, { ForwardRefRenderFunction, forwardRef, useRef, useState } from "react";
import ReactSelect, {
  CSSObjectWithLabel,
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
    dropdownIndicator: (
      base: CSSObjectWithLabel,
      state: DropdownIndicatorProps<CustomOption, boolean, GroupBase<CustomOption>>,
    ) => ({
      ...base,
      transform: state.selectProps.menuIsOpen ? "rotate(-180deg)" : "rotate(0)",
    }),
    control: (
      baseStyles: CSSObjectWithLabel,
      state: ControlProps<CustomOption, boolean, GroupBase<CustomOption>>,
    ) => ({
      ...baseStyles,
      borderColor: state.isFocused ? formElements.input.borderFocusColor : baseStyles.borderColor,
      ":hover": { borderColor: formElements.input.borderFocusColor },
    }),
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
          // components={components}
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
