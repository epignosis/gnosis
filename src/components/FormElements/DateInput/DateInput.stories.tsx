import React from "react";
import { StoryFn } from "@storybook/react";
import DateInputComponent, { DateInputProps } from "./DateInput";

export default {
  title: "components/Form Elements/DateInput",
  component: DateInputComponent,
  args: {
    label: "Start date",
    id: "dateInput",
    inline: false,
    size: "md",
    status: "valid",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "select" },
    },
    status: {
      options: ["valid", "error"],
      control: { type: "select" },
    },
  },
  decorators: [
    (Story: StoryFn): JSX.Element => (
      <div style={{ maxWidth: 500 }}>
        <Story />
      </div>
    ),
  ],
};

const Template: StoryFn<DateInputProps> = (args) => <DateInputComponent {...args} />;

export const Default = Template.bind({});

export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
};

export const WithRequired = Template.bind({});

WithRequired.args = {
  required: true,
};

export const WithMinMax = Template.bind({});

WithMinMax.args = {
  min: "2026-01-01",
  max: "2026-12-31",
};

export const WithError = Template.bind({});

WithError.args = {
  status: "error",
};
