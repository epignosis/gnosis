import React from "react";
import { StoryFn } from "@storybook/react";
import Alert, { AlertProps } from "./Alert";
import { alertMeta, infoArgs, dangerArgs, successArgs, warningArgs } from "./Alert.meta";

export default { ...alertMeta, component: Alert };

// Template for generating stories
const Template: StoryFn<AlertProps> = (args) => <Alert {...args}>This is an alert!</Alert>;

// Story for Info Alert
export const Info = Template.bind({});
Info.args = infoArgs;

// Story for Danger Alert
export const Danger = Template.bind({});
Danger.args = dangerArgs;

// Story for Success Alert
export const Success = Template.bind({});
Success.args = successArgs;

// Story for Warning Alert
export const Warning = Template.bind({});
Warning.args = warningArgs;

// Story with Close Button
export const WithCloseBtn = Template.bind({});
WithCloseBtn.args = {
  type: "info",
  onClose: () => alert("Alert closed!"),
};
