import React from "react";
import { StoryFn } from "@storybook/react";
import { InfoIconSVG } from "../../icons";
import StatusTag, { StatusTagProps } from "./StatusTag";
import { statusTagMeta } from "./StatusTag.meta";

export default { ...statusTagMeta, component: StatusTag };

const Template: StoryFn<StatusTagProps> = (args) => <StatusTag {...args} />;

export const Default = Template.bind({});

Default.args = {
  size: "md",
  text: "English",
};

export const WithIcon = Template.bind({});

WithIcon.args = {
  size: "md",
  text: "English",
  icon: InfoIconSVG,
};

export const WithOnlyIcon = Template.bind({});

WithOnlyIcon.args = {
  size: "md",
  text: "",
  icon: InfoIconSVG,
  ariaLabel: "Tag only with icon",
};
