import React from "react";
import { Story } from "@storybook/react";
import CheckboxComponent, { CheckboxProps } from "./Checkbox";

export default {
  title: "components/Form Elements/Checkbox/Checkbox",
  component: CheckboxComponent,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["md", "lg"],
      },
    },
  },
  args: {
    size: "md",
    inline: false,
    disabled: false,
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
  {
    label: "Partially selected",
    value: "",
    name: "partiallySelected",
    isPartiallySelected: true,
  },
  {
    value: "noLabel",
    name: "noLabel",
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
