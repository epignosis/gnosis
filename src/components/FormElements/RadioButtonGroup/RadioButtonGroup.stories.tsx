import React, { useState } from "react";
import { Story } from "@storybook/react";
import RadioButtonGroupComponent, { RadioGroupProps } from "./RadioButtonGroup";

export default {
  title: "components/Form Elements/Radio Button Group",
  component: RadioButtonGroupComponent,
  args: {
    id: "radioButtonGroup",
    size: "md",
    id: "radioButtonGroupStory",
    className: "radioButtonGroupStory",
    options: [
      {
        label: "All",
        value: "all",
      },
      {
        label: "In progress",
        value: "progress",
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
  },
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["md", "lg"],
      },
    },
  },
};

export const RadioButtonGroup: Story<RadioGroupProps> = (args) => {
  const [value, setValue] = useState("");

  return <RadioButtonGroupComponent {...args} value={value} onChange={setValue} />;
};
