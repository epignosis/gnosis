import React from "react";
import { Story } from "@storybook/react";
import Alert, { AlertProps } from "./Alert";
import { Heading } from "@components";
import { ScrollRegularSVG } from "@icons/core";

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
  },
};

const Template: Story<AlertProps> = (args) => (
  <Alert {...args}>
    <Heading as="h3">Hi I am an Alert component.</Heading>
    <p>Use the story&apos;s controls to check my various states</p>
  </Alert>
);

export const Default = Template.bind({});

Default.args = {
  type: "info",
  icon: ScrollRegularSVG,
};

export const WithCloseBtn = Template.bind({});

WithCloseBtn.args = {
  type: "info",
};

WithCloseBtn.argTypes = {
  onClose: { action: "onClose" },
};
