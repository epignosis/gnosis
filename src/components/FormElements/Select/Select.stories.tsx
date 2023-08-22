import React from "react";
import { Story } from "@storybook/react";
import CustomSelect from "./Select";
import { CustomSelectProps } from "./types";

export default {
  title: "components/Form Elements/Select",
  component: CustomSelect,
  args: {
    size: "md",
    label: "Choose a programming language",
    inline: false,
    id: "programming-language",
  },
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["sm", "md", "lg"],
      },
    },
    isRtl: {
      control: {
        type: "boolean",
      },
    },
    isDisabled: {
      control: {
        type: "boolean",
      },
    },
    isClearable: {
      control: {
        type: "boolean",
      },
    },
    isMulti: {
      control: {
        type: "boolean",
      },
    },
    isSearchable: {
      control: {
        type: "boolean",
      },
    },

    status: {
      control: {
        type: "select",
        options: ["valid", "error"],
      },
    },
    onChange: { action: "value changed" },
  },
  decorators: [
    (Story: Story): JSX.Element => (
      <div>
        <Story />
      </div>
    ),
  ],
};

const Template: Story<CustomSelectProps<OptionType>> = (args) => (
  <CustomSelect {...args} options={options} />
);

export const Default = Template.bind({});

const options: OptionType[] = [
  { label: "Rust", value: "rs" },
  { label: "JavaScript", value: "js" },
  { label: "TypeScript", value: "ts" },
  { label: "GoLang", value: "go" },
  { label: "Python", value: "python" },
  { label: "PHP", value: "php" },
  { label: "C++", value: "c++" },
  { label: "C#", value: "c#" },
  { label: "Java", value: "java" },
  { label: "Ruby", value: "ruby" },
  { label: "C", value: "c" },
  { label: "Swift", value: "swift" },
];

type OptionType = { label: string; value: string; disabled?: boolean };
