import React from "react";
import { StoryFn } from "@storybook/react";
import CheckboxComponent, { CheckboxProps } from "./Checkbox";
import { checkboxMeta, withRequiredArgs } from "./Checkbox.meta";

export default { ...checkboxMeta, component: CheckboxComponent };

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

const jsxOptions = [
  {
    label: <div>All</div>,
    value: "all",
    name: "all",
  },
  {
    label: <button>In progress</button>,
    value: "progress",
    name: "progress",
  },
];

type CheckboxStoryProps = Omit<CheckboxProps, "label" | "value" | "name" | "id">;

export const Checkbox: StoryFn<CheckboxStoryProps> = (args) => {
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

export const WithRequired = Checkbox.bind({});

WithRequired.args = withRequiredArgs;

export const CheckboxWithJSXLabel: StoryFn<CheckboxStoryProps> = (args) => {
  return (
    <>
      {jsxOptions.map((option) => (
        <CheckboxComponent key={option.value} {...args} id={option.name} {...option} />
      ))}
    </>
  );
};

export const WithRequiredWithJSXLabel = CheckboxWithJSXLabel.bind({});

WithRequiredWithJSXLabel.args = {
  required: true,
};
