import React, { useState } from "react";
import { Story } from "@storybook/react";
import MultiSelectComponent, { MultiSelectOption, MultiSelectProps } from "./MultiSelect";

export default {
  title: "components/Form Elements/Multi Select",
  component: MultiSelectComponent,
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
  const [state, setState] = useState<MultiSelectOption[]>();

  return (
    <MultiSelectComponent
      {...args}
      id="multiSelect"
      value={state}
      onChange={(selections): void => setState(selections as MultiSelectOption[])}
    />
  );
};

MultiSelect.args = {
  placeholder: "Multi select",
  label: "Choose multiple values",
  altLabel: false,
  block: true,
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
};
