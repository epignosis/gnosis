import React, { useState } from "react";
import { Story } from "@storybook/react";
import { CalendarSVG } from "../../../icons/";
import InputComponent, { InputProps } from "./Input";
import SearchInput from "./SearchInput";

export default {
  title: "components/Form Elements/Input",
  component: InputComponent,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["sm", "md", "lg"],
      },
    },
    status: {
      control: {
        type: "select",
        options: ["valid", "error"],
      },
    },
    autoFocus: {
      control: {
        type: "boolean",
      },
    },
  },
  args: {
    id: "input",
    size: "md",
    placeholder: "Your LMS username",
    label: "Username",
    inline: false,
    isClearable: false,
    status: "valid",
    className: "inputStory",
    tooltipContent: "",
    autoFocus: false,
  },
  decorators: [
    (Story: Story): JSX.Element => (
      <div style={{ maxWidth: 400 }}>
        <Story />
      </div>
    ),
  ],
};

const InputTemplate: Story<InputProps> = (args) => {
  const [state, setState] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  const onClear = () => {
    setState("");
  };

  return <InputComponent {...args} value={state} onChange={handleChange} onClear={onClear} />;
};

const SearchTemplate: Story<InputProps> = (args) => {
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

withAutoFocus.args = {
  autoFocus: true,
};

export const Disabled = InputTemplate.bind({});

Disabled.args = {
  disabled: true,
};

export const WithRequired = InputTemplate.bind({});

WithRequired.args = {
  required: true,
};

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
};

export const WithIconAfterNoVerticalLine = InputTemplate.bind({});

WithIconAfterNoVerticalLine.args = {
  iconAfter: CalendarSVG,
  showVerticalLine: false,
};

export const WithError = InputTemplate.bind({});

WithError.args = {
  status: "error",
};

export const Search = SearchTemplate.bind({});
