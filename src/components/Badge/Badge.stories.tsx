import React from "react";
import { Story } from "@storybook/react";
import Badge, { BadgeProps } from "./Badge";

export default {
  title: "Components/Badge",
};

export const Default: Story<BadgeProps> = (args) => <Badge {...args}>Notifications</Badge>;

Default.args = {
  offset: {
    right: "-8px",
    top: "0",
  },
};
