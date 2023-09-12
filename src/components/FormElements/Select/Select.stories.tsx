import React from "react";
import { Story } from "@storybook/react";
import Select from "./Select";
import { CustomSelectProps, CustomOption } from "./types";
import { defaultOptions, groupedOptions } from "./data";
import CreatableSelect from "./CreatableSelect";

export default {
  title: "components/Form Elements/Select",
  component: Select,
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

const Template: Story<CustomSelectProps<CustomOption, boolean>> = (args) => <Select {...args} />;
const Creatable: Story<CustomSelectProps<CustomOption, boolean>> = (args) => (
  <CreatableSelect {...args} />
);

export const Default = Template.bind({});

Default.args = {
  options: defaultOptions,
};

export const withGroupedOptions = Template.bind({});

withGroupedOptions.args = {
  options: groupedOptions,
};

export const withInnerSearch = Template.bind({});

withInnerSearch.args = {
  options: defaultOptions,
  hasInnerSearch: true,
};

export const withMultipleValues = Template.bind({});

withMultipleValues.args = {
  options: defaultOptions,
  isMulti: true,
};

export const Disabled = Template.bind({ options: defaultOptions, isDisabled: true });

Disabled.args = {
  options: defaultOptions,
  isDisabled: true,
};

export const withValueCreation = Creatable.bind({});

Creatable.args = {
  options: defaultOptions,
  isMulti: true,
  isSearchable: true,
  isClearable: true,
};
