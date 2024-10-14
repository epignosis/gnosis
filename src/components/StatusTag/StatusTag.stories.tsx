import React from "react";
import { StoryFn } from "@storybook/react";
import { InfoIconSVG } from "../../icons";
import StatusTag, { StatusTagProps, statusTagSizes } from "./StatusTag";

export default {
  component: StatusTag,
  title: "Components/StatusTag",
  argTypes: {
    text: "Completed",
    size: "md",
    color: {
      control: {
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
        ],
      },
    },
    showIcon: false,
  },
};

const Template: StoryFn<StatusTagProps> = (args) => <StatusTag {...args} />;

export const Default = Template.bind({});

Default.args = {
  size: statusTagSizes.LG,
  text: "English",
  showIcon: false,
  icon: InfoIconSVG,
};

export const WithIcon = Template.bind({});

WithIcon.args = {
  size: statusTagSizes.LG,
  text: "English",
  showIcon: true,
  icon: InfoIconSVG,
};

export const WithOnlyIcon = Template.bind({});

WithOnlyIcon.args = {
  size: statusTagSizes.LG,
  text: "",
  showIcon: true,
  showText: false,
  icon: InfoIconSVG,
};
