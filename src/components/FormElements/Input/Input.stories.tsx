import React, { useState } from "react";
import { StoryFn } from "@storybook/react";
import { CalendarSVG } from "../../../icons/";
import InputComponent, { InputProps } from "./Input";
import SearchInput from "./SearchInput";
import { inputMeta, withAutoFocusArgs, disabledArgs, withRequiredArgs, withErrorArgs } from "./Input.meta";

export default { ...inputMeta, component: InputComponent };

const InputTemplate: StoryFn<InputProps> = (args) => {
  const [state, setState] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  const onClear = () => {
    setState("");
  };

  return <InputComponent {...args} value={state} onChange={handleChange} onClear={onClear} />;
};

const SearchTemplate: StoryFn<InputProps> = (args) => {
  return (
    <SearchInput
      {...args}
      id="search-input"
      placeholder="Search"
      onInputChanged={(): void => undefined}
    />
  );
};

export const Default = InputTemplate.bind({});

export const withAutoFocus = InputTemplate.bind({});

withAutoFocus.args = withAutoFocusArgs;

export const Disabled = InputTemplate.bind({});

Disabled.args = disabledArgs;

export const WithRequired = InputTemplate.bind({});

WithRequired.args = withRequiredArgs;

export const DisabledWithIcon = InputTemplate.bind({});

DisabledWithIcon.args = {
  disabled: true,
  iconAfter: CalendarSVG,
};

export const WithIconBefore = InputTemplate.bind({});

WithIconBefore.args = {
  iconBefore: CalendarSVG,
};

export const WithIconAfter = InputTemplate.bind({});

WithIconAfter.args = {
  iconAfter: CalendarSVG,
  tooltipContent: <div> This is an html tooltip </div>,
  onIconClick: () => alert("Icon clicked"),
};

export const WithIconAfterNoVerticalLine = InputTemplate.bind({});

WithIconAfterNoVerticalLine.args = {
  iconAfter: CalendarSVG,
  showVerticalLine: false,
};

export const WithError = InputTemplate.bind({});

WithError.args = withErrorArgs;

export const Search = SearchTemplate.bind({});
