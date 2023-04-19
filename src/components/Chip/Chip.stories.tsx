import React from "react";
import { Story } from "@storybook/react";
import Chip, { ChipProps } from "./Chip";
import { colors } from "@theme/default/colors";

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
  style: {
    backgroundColor: `${colors.primary.lightest}`,
    color: `${colors.white}`,
  },
  children: "This is a chip",
};
