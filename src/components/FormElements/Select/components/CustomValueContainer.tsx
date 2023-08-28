import React, { Children } from "react";
import { CommonProps, GroupBase, components } from "react-select";
import { CustomValueContainerProps, CustomOption } from "../types";

const { SingleValue, Placeholder, ValueContainer } = components;

const CustomValueContainer: React.FC<CustomValueContainerProps<CustomOption, boolean>> = (
  CustomValueContainerProps,
) => {
  const { children, selectProps, isFocused = false, ...props } = CustomValueContainerProps;

  const commonProps: CommonProps<CustomOption, boolean, GroupBase<CustomOption>> = {
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

  const customProps = {
    isDisabled: selectProps.isDisabled,
    getClassNames: props.getClassNames,
    innerProps: Object.assign({}, props.innerProps, { "data-role": "menuList" }),
  };

  return (
    <ValueContainer {...props} selectProps={selectProps}>
      {Children.map(children, (child) => {
        return child ? (
          child
        ) : props.hasValue ? (
          <SingleValue {...commonProps} {...customProps} data={props.getValue()[0]}>
            {selectProps.getOptionLabel(props.getValue()[0])}
          </SingleValue>
        ) : (
          <Placeholder {...commonProps} {...customProps} isFocused={isFocused}>
            {selectProps.placeholder}
          </Placeholder>
        );
      })}
    </ValueContainer>
  );
};

export default CustomValueContainer;
