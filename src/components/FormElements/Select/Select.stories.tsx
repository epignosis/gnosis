import React from "react";
import { Story } from "@storybook/react";
import CustomSelect from "./Select";
import { CustomSelectProps, CustomOption } from "./types";
import { defaultOptions, groupedOptions } from "./data";

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
    hasInnerSearch: {
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

const Template: Story<CustomSelectProps<CustomOption>> = (args) => <CustomSelect {...args} />;

export const Default = Template.bind({});

Default.args = {
  options: defaultOptions,
};

export const withGroupedOptions = Template.bind({ options: groupedOptions });

withGroupedOptions.args = {
  options: groupedOptions,
};
