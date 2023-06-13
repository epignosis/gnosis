import React from "react";
import { Story } from "@storybook/react";
import { UserOutlinedSVG } from "../../icons";
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

const Template: Story<ChipProps> = (args) => <Chip {...args} />;

export const Default = Template.bind({});

Default.args = {
  size: "md",
  children: "This is a default chip",
};

export const Custom = Template.bind({});

Custom.args = {
  size: "md",
  children: "This is a custom chip",
  style: {
    backgroundColor: colors.red.base,
    color: colors.black,
  },
};

export const Filters = Template.bind({});

Filters.args = {
  size: "md",
  children: "Filter",
  isFilter: true,
  icon: <UserOutlinedSVG height={16} />,
};
