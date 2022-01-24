import React from "react";
import { Story } from "@storybook/react";
import Badge, { BadgeProps } from "./Badge";

export default {
  title: "Components/Badge",
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["md"],
      },
    },
  },
};

const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

export const WithBadgeContent = Template.bind({});

WithBadgeContent.args = {
  offset: {
    right: "-15px",
    top: "-7px",
  },
  children: "Notifications",
  size: "md",
  badgeContent: 5,
};

export const WithoutBadgeContent = Template.bind({});

WithoutBadgeContent.args = {
  offset: {
    right: "-8px",
    top: "0px",
  },
  children: "Notifications",
  size: "md",
};
