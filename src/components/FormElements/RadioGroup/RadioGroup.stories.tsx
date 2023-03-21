import React from "react";
import { Story } from "@storybook/react";
import RadioGroupComponent, { RadioGroupProps } from "./RadioGroup";

export default {
  title: "components/Form Elements/Radio Group",
  component: RadioGroupComponent,
  args: {
    size: "md",
    inline: false,
    initialValue: "",
    groupname: "radio-group",
    id: "radioGroupStory",
    className: "radioGroupStory",
    options: [
      {
        label: "All",
        value: "all",
      },
      {
        label: "In progress",
        value: "progress",
      },
      {
        label: "Completed",
        value: "completed",
      },
      {
        label: "Failed",
        value: "failed",
      },
    ],
  },
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["md", "lg"],
      },
    },
    initialValue: {
      control: {
        type: "select",
        options: ["all", "progress", "completed", "failed"],
      },
    },
  },
};

const Template: Story<RadioGroupProps> = (args) => <RadioGroupComponent {...args} />;

export const Default = Template.bind({});

export const WithDisabledOptions = Template.bind({});

WithDisabledOptions.args = {
  groupname: "radio-group-disabled",
  options: [
    {
      label: "All",
      value: "all",
      disabled: true,
    },
    {
      label: "In progress",
      value: "progress",
      disabled: true,
    },
    {
      label: "Completed",
      value: "completed",
    },
    {
      label: "Failed",
      value: "failed",
    },
  ],
};

export const WithInitialValue = Template.bind({});

WithInitialValue.args = {
  groupname: "radio-group-with-value",
  initialValue: "completed",
};

export const RadioWithJsxLabel = Template.bind({});

RadioWithJsxLabel.args = {
  groupname: "radio-with-jsx-label",
  options: [
    {
      label: <div>All</div>,
      value: "all",
    },
    {
      label: <button>In progress</button>,
      value: "progress",
    },
  ],
};
