// Inspired by this https://codesandbox.io/embed/m75wlyx3oy

import React, {
  Children,
  ForwardRefRenderFunction,
  forwardRef,
  useEffect,
  useRef,
  useState,
  MouseEvent as ReactMouseEvent,
} from "react";
import ReactSelect, { CommonProps, GroupBase, SelectInstance, components } from "react-select";
import { SerializedStyles } from "@emotion/react";
import classNames from "classnames";
import { searchInputContainer } from "../Input/styles";
import Label from "../Label/Label";
import Input from "../Input/Input";
import { customMenuList, selectContainer } from "./styles";
import {
  CustomMenuListProps,
  CustomOptionType,
  CustomSelectProps,
  CustomValueContainerProps,
} from "./types";
import { formElements } from "@theme/default/config";

const MAX_MENU_HEIGHT = 300;
const OUTER_PLACEHOLDER = "Select...";
const INNER_PLACEHOLDER = "Search...";

const { MenuList, ValueContainer, SingleValue, Placeholder } = components;

const CustomMenuList: React.FC<CustomMenuListProps<CustomOptionType>> = (customMenuProps) => {
  const { selectProps, ...props } = customMenuProps;
  const { onInputChange, inputValue, innerPlaceholder } = selectProps;
  const { onMenuInputFocus } = selectProps;

  const ariaAttributes = {
    "aria-autocomplete": "list" as const,
    "aria-label": selectProps["aria-label"],
    "aria-labelledby": selectProps["aria-labelledby"],
  };

  return (
    <div css={customMenuList}>
      <div css={searchInputContainer} onMouseDown={(e) => e.stopPropagation()}>
        <Input
          id="react-select-inner-search-input"
          placeholder={innerPlaceholder}
          autoCorrect="off"
          autoComplete="off"
          spellCheck="false"
          type="text"
          value={inputValue}
          showVerticalLine={false}
          isClearable={true}
          onChange={(e) => {
            onInputChange(e.target.value, {
              action: "input-change",
              prevInputValue: inputValue,
            });
          }}
          onMouseDown={(e: ReactMouseEvent<HTMLInputElement>) => {
            e.stopPropagation();
            const input = e.target as HTMLInputElement;
            input.focus();
          }}
          onClear={() => {
            onInputChange("", {
              action: "input-change",
              prevInputValue: inputValue,
            });
          }}
          onFocus={onMenuInputFocus}
          {...ariaAttributes}
        />
      </div>

      <MenuList {...props} selectProps={selectProps} />
    </div>
  );
};

const CustomValueContainer: React.FC<CustomValueContainerProps<CustomOptionType>> = (
  customProps,
) => {
  const { children, selectProps, ...props } = customProps;
  const { isFocused = false } = selectProps;

  const commonProps: CommonProps<CustomOptionType, false, GroupBase<CustomOptionType>> = {
    clearValue: props.clearValue,
    getStyles: props.getStyles,
    getValue: props.getValue,
    hasValue: props.hasValue,
    isMulti: props.isMulti,
    isRtl: props.isRtl,
    options: props.options,
    selectOption: props.selectOption,
    setValue: props.setValue,
    selectProps,
    cx: props.cx,
    getClassNames: props.getClassNames,
    theme: props.theme,
  };

  return (
    <ValueContainer {...props} selectProps={selectProps}>
      {Children.map(children, (child) => {
        return child ? (
          child
        ) : props.hasValue ? (
          <SingleValue
            {...commonProps}
            isDisabled={selectProps.isDisabled}
            getClassNames={props.getClassNames}
            innerProps={Object.assign({}, props.innerProps, { "data-role": "menuList" })}
            data={props.getValue()[0]}
          >
            {selectProps.getOptionLabel(props.getValue()[0])}
          </SingleValue>
        ) : (
          <Placeholder
            {...commonProps}
            isDisabled={selectProps.isDisabled}
            getClassNames={props.getClassNames}
            innerProps={Object.assign({}, props.innerProps, { "data-role": "menuList" })}
            isFocused={isFocused}
          >
            {selectProps.placeholder}
          </Placeholder>
        );
      })}
    </ValueContainer>
  );
};

const CustomSelect: ForwardRefRenderFunction<
  SelectInstance<CustomOptionType>,
  CustomSelectProps<CustomOptionType>
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
    placeholder: outerPlaceholder = OUTER_PLACEHOLDER,
    innerPlaceholder = INNER_PLACEHOLDER,
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
            MenuList: hasInnerSearch ? CustomMenuList : MenuList,
            ValueContainer: (props) => CustomValueContainer(props),
          }}
          {...{
            menuIsOpen: isFocused || undefined,
            isFocused: isFocused,
            onMenuInputFocus: () => setIsFocused(true),
            onMouseDown: (e: MouseEvent) => e.stopPropagation(),
            innerPlaceholder,
          }}
          inputValue={inputValue}
          onChange={() => setIsFocused(false)}
          onInputChange={(val) => {
            setInputValue(val);
          }}
          blurInputOnSelect={true}
        />
      </div>
    </div>
  );
};

export default forwardRef(CustomSelect);
