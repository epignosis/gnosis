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
    right: "-8px",
    top: "0",
  },
  children: "Notifications",
  size: "md",
};
