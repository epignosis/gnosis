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

export const Default: Story<BadgeProps> = (args) => <Badge {...args} />;

Default.args = {
  offset: {
    right: "-15px",
    top: "-7px",
  },
  children: "Notifications",
  size: "md",
  badgeContent: 5,
};
