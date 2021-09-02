import React from "react";
import { Story } from "@storybook/react";
import Alert, { AlertProps } from "./Alert";

export default {
  component: Alert,
  title: "Components/Alert",
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["info", "danger", "success", "warning"],
      },
    },
    icon: {
      control: false,
    },
  },
  args: {
    type: "info",
    children: "Hi I am an Alert component!",
  },
};

const Template: Story<AlertProps> = (args) => <Alert {...args} />;

export const Default = Template.bind({});

export const WithCloseBtn = Template.bind({});

WithCloseBtn.argTypes = {
  onClose: { action: "onClose" },
};
