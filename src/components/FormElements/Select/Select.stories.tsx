import React, { useState } from "react";
import { Story } from "@storybook/react";
import { CustomSelectProps, CustomOption } from "./types";
import { defaultOptions, groupedOptions } from "./data";
import Select from "./Select";

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

export const Default = Template.bind({});

Default.args = {
  options: defaultOptions,
};

export const withGroupedOptions = Template.bind({});

withGroupedOptions.args = {
  options: groupedOptions,
};

export const WithRequired = Template.bind({});

WithRequired.args = {
  options: defaultOptions,
  required: true,
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

export const withValueCreation = Template.bind({});

withValueCreation.args = {
  options: defaultOptions,
  isMulti: true,
  isClearable: true,
  hasInnerSearch: true,
  type: "creatable",
};

export const AsyncSelect: Story<CustomSelectProps<CustomOption, boolean>> = (args) => {
  const [options, setOptions] = useState<CustomOption[]>([]);
  const [loading, setLoading] = useState(false);

  const onAsyncSearchChange = (value: string): Promise<void> => {
    setLoading(true);
    return new Promise<void>((resolve) => {
      // Simulate an async operation with a setTimeout
      setTimeout(() => {
        resolve();
        setLoading(false);

        const foundData = defaultOptions.filter((data) => data.value === value);

        setOptions(foundData?.length > 0 ? foundData : []);
      }, 3000);
    });
  };

  return (
    <>
      <h2>
        In order for the search to work corerctly, search on of the following: java, python, ruby,
        php, c
      </h2>

      <Select
        {...args}
        options={options}
        type="async"
        asyncOptions={{
          onAsyncSearchChange,
          initialText: "Type 3 or more characters",
          status: {
            isLoading: loading,
            error: false,
          },
        }}
      />
    </>
  );
};
