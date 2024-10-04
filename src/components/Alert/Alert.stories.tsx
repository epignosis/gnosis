import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Alert, { AlertProps } from "./Alert";

// Meta configuration for Storybook
export default {
  title: "Components/Alert", // Folder structure in Storybook
  component: Alert,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["info", "danger", "success", "warning"],
      },
    },
    onClose: { action: "closed" },
  },
} as Meta;

// Template for generating stories
const Template: StoryFn<AlertProps> = (args) => <Alert {...args}>This is an alert!</Alert>;

// Story for Info Alert
export const Info = Template.bind({});
Info.args = {
  type: "info",
};

// Story for Danger Alert
export const Danger = Template.bind({});
Danger.args = {
  type: "danger",
};

// Story for Success Alert
export const Success = Template.bind({});
Success.args = {
  type: "success",
};

// Story for Warning Alert
export const Warning = Template.bind({});
Warning.args = {
  type: "warning",
};

// Story with Close Button
export const WithCloseBtn = Template.bind({});
WithCloseBtn.args = {
  type: "info", // Alert type (can be info, danger, success, or warning)
  onClose: () => alert("Alert closed!"), // Close button action
};
