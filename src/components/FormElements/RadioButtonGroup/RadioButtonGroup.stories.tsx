import React, { useState } from "react";
import { StoryFn } from "@storybook/react";
import RadioButtonGroupComponent, { RadioGroupProps } from "./RadioButtonGroup";

export default {
  title: "components/Form Elements/Radio Button Group",
  component: RadioButtonGroupComponent,
  args: {
    id: "radioButtonGroup",
    size: "md",
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

export const RadioButtonGroup: StoryFn<RadioGroupProps> = (args) => {
  const [value, setValue] = useState("");
  const updateValue = (val: string) => {
    setValue(val);
  };

  return <RadioButtonGroupComponent {...args} value={value} onChange={updateValue} />;
};
