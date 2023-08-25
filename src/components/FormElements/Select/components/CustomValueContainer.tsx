import React, { Children } from "react";
import { CommonProps, GroupBase, components } from "react-select";
import { CustomValueContainerProps, CustomOption } from "../types";

const { SingleValue, Placeholder, ValueContainer } = components;

const CustomValueContainer: React.FC<CustomValueContainerProps<CustomOption, boolean>> = (
  customProps,
) => {
  const { children, selectProps, isFocused = false, ...props } = customProps;

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

export default CustomValueContainer;
