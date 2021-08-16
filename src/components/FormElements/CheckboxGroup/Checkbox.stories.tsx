import React from "react";
import { Story } from "@storybook/react/types-6-0";
import CheckboxComponent, { CheckboxProps } from "./Checkbox";

export default {
  title: "atoms/Form Elements/Checkbox/Checkbox",
  component: CheckboxComponent,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["md", "lg"],
      },
    },
  },
};

const options = [
  {
    label: "All",
    value: "all",
    name: "all",
  },
  {
    label: "In progress",
    value: "progress",
    name: "progress",
    disabled: true,
  },
  {
    label: "Completed",
    value: "completed",
    name: "completed",
  },
  {
    label: "Failed",
    value: "failed",
    name: "failed",
  },
];

export const Checkbox: Story<Omit<CheckboxProps, "label" | "value" | "name" | "id">> = (args) => {
  return (
    <>
      {options.map((option) => (
        <CheckboxComponent
          key={option.value}
          {...args}
          id={option.name}
          defaultChecked={option.disabled}
          {...option}
        />
      ))}
    </>
  );
};

Checkbox.args = {
  size: "md",
  inline: false,
  disabled: false,
};
