import React, {
  Children,
  ForwardRefRenderFunction,
  MouseEvent,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
import ReactSelect, { CommonProps, GroupBase, SelectInstance, components } from "react-select";
import { SerializedStyles } from "@emotion/react";
import classNames from "classnames";
import { searchInputContainer } from "../Input/styles";
import Label from "../Label/Label";
import Input from "../Input/Input";
import { customMenuList, selectContainer } from "./styles";
import { CustomOptionType, CustomSelectProps } from "./types";
import { formElements } from "@theme/default/config";

const MAX_MENU_HEIGHT = 300;
const INDICATOR_TRANSITION_DURATION = "250";
const { MenuList, ValueContainer, SingleValue, Placeholder } = components;

const CustomMenuList = (customMenuProps: any): JSX.Element => {
  const { placeholder = "Select...", selectProps, ...props } = customMenuProps;
  const { onInputChange, inputValue, onMenuInputFocus } = selectProps;

  const ariaAttributes = {
    "aria-autocomplete": "list" as const,
    "aria-label": selectProps["aria-label"],
    "aria-labelledby": selectProps["aria-labelledby"],
  };

  return (
    <div css={customMenuList} onMouseDown={(e) => e.stopPropagation()}>
      <div css={searchInputContainer}>
        <Input
          id="react-select-inner-search-input"
          placeholder={placeholder}
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
            });
          }}
          onMouseDown={(e: MouseEvent<HTMLInputElement>) => {
            e.stopPropagation();
            const input = e.target as HTMLInputElement;
            input.focus();
          }}
          onClear={() => {
            onInputChange("", {
              action: "input-change",
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

const CustomValueContainer = (CustomValueContainerProps: any) => {
  const { children, selectProps, ...props } = CustomValueContainerProps;

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
            innerProps={props.innerProps}
            data={props.getValue()}
          >
            {selectProps.getOptionLabel(props.getValue()[0])}
          </SingleValue>
        ) : (
          <Placeholder
            {...commonProps}
            isDisabled={selectProps.isDisabled}
            getClassNames={props.getClassNames}
            innerProps={props.innerProps}
            isFocused={selectProps.isFocused}
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
    isSearchable = false,
    hasInnerSearch = false,
    ...rest
  } = props;
  const hasLabel = Boolean(label);

  const containerRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const onDomClick = (e: any) => {
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
          ref={forwardedRef}
          options={options}
          isSearchable={isSearchable}
          maxMenuHeight={maxMenuHeight}
          classNames={{
            control: () => `control-${size} ${containerClassNames}`,
            option: () => `option-${size}`,
          }}
          styles={{
            dropdownIndicator: (base, state) => ({
              ...base,
              transform: state.selectProps.menuIsOpen ? "rotate(-180deg)" : "rotate(0)",
              transition: INDICATOR_TRANSITION_DURATION,
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
            MenuList: hasInnerSearch ? CustomMenuList : components.MenuList,
            ValueContainer: (props) => CustomValueContainer(props),
          }}
          {...{
            menuIsOpen: isFocused || undefined,
            isFocused: isFocused || undefined,
            onMenuInputFocus: () => setIsFocused(true),
            onMouseDown: (e: MouseEvent) => e.stopPropagation(),
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
