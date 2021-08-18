import React from "react";
import { Story } from "@storybook/react";
import RadioGroupComponent, { RadioGroupProps } from "./RadioGroup";

export default {
  title: "components/Form Elements/Radio Group",
  component: RadioGroupComponent,
  args: {
    size: "md",
    inline: false,
    initialValue: "",
    groupname: "radio-group",
  },
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["md", "lg"],
      },
    },
    initialValue: {
      control: {
        type: "select",
        options: ["all", "progress", "completed", "failed"],
      },
    },
  },
};

export const RadioGroup: Story<RadioGroupProps> = (args) => <RadioGroupComponent {...args} />;

RadioGroup.args = {
  options: [
    {
      label: "All",
      value: "all",
    },
    {
      label: "In progress",
      value: "progress",
      disabled: true,
    },
    {
      label: "Completed",
      value: "completed",
    },
    {
      label: "Failed",
      value: "failed",
    },
  ],
};
