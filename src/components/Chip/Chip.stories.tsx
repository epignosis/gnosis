import React from "react";
import { Story } from "@storybook/react";
import Chip, { ChipProps } from "./Chip";

export default {
  component: Chip,
  title: "Components/Chip",
  argTypes: {
    onClose: { action: "clicked" },
    size: {
      control: {
        type: "select",
        options: ["md", "lg"],
      },
    },
  },
};

export const Default: Story<ChipProps> = (args) => <Chip {...args} />;

Default.args = {
  size: "md",
  style: { backgroundColor: "#5c5c5c", color: "#fff" },
  children: "This is a chip",
};
