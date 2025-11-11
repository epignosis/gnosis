import React from "react";
import { StoryFn } from "@storybook/react";
import { InfoIconSVG } from "../../icons";
import StatusTag, { StatusTagProps } from "./StatusTag";

export default {
  component: StatusTag,
  title: "Components/StatusTag",
  argTypes: {
    text: "Completed",
    size: "md",
    icon: InfoIconSVG,
    iconSize: 16,
    color: {
      type: "select",
      options: [
        "neutral",
        "positive",
        "negative",
        "inactive",
        "warning",
        "promo",
        "pale",
        "grey",
        "red",
        "transparent",
      ],
    },
    fontWeight: {
      type: "select",
      options: ["400", "700"],
    },
  },
};

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
