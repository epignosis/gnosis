import React from "react";
import { StoryFn } from "@storybook/react";
import RadioGroupComponent, { RadioGroupProps } from "./RadioGroup";
import { radioGroupMeta, defaultArgs, withInitialValueArgs } from "./RadioGroup.meta";

export default { ...radioGroupMeta, component: RadioGroupComponent };

const Template: StoryFn<RadioGroupProps> = (args) => <RadioGroupComponent {...args} />;

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

WithInitialValue.args = withInitialValueArgs;

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
