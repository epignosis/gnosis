import React, { useState } from "react";
import { Story } from "@storybook/react";
import { CalendarSVG } from "../../../icons/";
import InputComponent, { InputProps } from "./Input";

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
  },
  decorators: [
    (Story: Story): JSX.Element => (
      <div style={{ maxWidth: 400 }}>
        <Story />
      </div>
    ),
  ],
};

const Template: Story<InputProps> = (args) => {
  const [state, setState] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  const onClear = () => {
    setState("");
  };

  return <InputComponent {...args} value={state} onChange={handleChange} onClear={onClear} />;
};

export const Default = Template.bind({});

export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
};

export const DisabledWithIcon = Template.bind({});

DisabledWithIcon.args = {
  disabled: true,
  iconAfter: CalendarSVG,
};

export const WithIconBefore = Template.bind({});

WithIconBefore.args = {
  iconBefore: CalendarSVG,
};

export const WithIconAfter = Template.bind({});

WithIconAfter.args = {
  iconAfter: CalendarSVG,
};

export const WithError = Template.bind({});

WithError.args = {
  status: "error",
};
