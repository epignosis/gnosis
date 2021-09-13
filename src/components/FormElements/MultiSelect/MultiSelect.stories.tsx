import React, { useState } from "react";
import { Story } from "@storybook/react";
import { CheckboxOption } from "../CheckboxGroup/Checkbox";
import MultiSelectComponent, { MultiSelectProps } from "./MultiSelect";

export default {
  title: "components/Form Elements/Multi Select",
  component: MultiSelectComponent,
  args: {
    placeholder: "Multi select",
    size: "md",
    label: "Choose multiple values",
    inline: false,
    id: "multiSelectStory",
    className: "multiSelectStory",
    options: [
      {
        label: "All",
        value: "all",
        name: "all",
      },
      {
        label: "In progress",
        value: "progress",
        name: "progress",
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
  decorators: [
    (Story: Story): JSX.Element => (
      <div style={{ maxWidth: 400 }}>
        <Story />
      </div>
    ),
  ],
};

export const MultiSelect: Story<MultiSelectProps> = (args) => {
  const [state, setState] = useState<CheckboxOption[]>();

  return (
    <MultiSelectComponent
      {...args}
      id="multiSelect"
      value={state}
      onChange={(selections): void => setState(selections as CheckboxOption[])}
    />
  );
};
