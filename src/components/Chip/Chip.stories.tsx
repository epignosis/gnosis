import React from "react";
import { Story } from "@storybook/react/types-6-0";
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
    bgColor: {
      control: {
        type: "select",
        options: ["filter"],
      },
    },
  },
};

export const Default: Story<ChipProps> = (args) => <Chip {...args} />;

Default.args = {
  size: "md",
  bgColor: "filter",
  children: "This is a chip",
};
