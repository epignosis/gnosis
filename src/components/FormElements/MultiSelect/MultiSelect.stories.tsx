import React, { useState } from "react";
import { Story } from "@storybook/react";
import MultiSelectComponent, { MultiSelectOption, MultiSelectProps } from "./MultiSelect";

export default {
  title: "components/Form Elements/Multi Select",
  component: MultiSelectComponent,
  args: {
    placeholder: "Multi select",
    size: "md",
    label: "Choose multiple values",
    altLabel: false,
    block: true,
    id: "multiSelectStory",
    className: "multiSelectStory",
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
