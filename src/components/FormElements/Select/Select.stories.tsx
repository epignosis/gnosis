import React, { useState } from "react";
import { Story } from "@storybook/react";
import { CustomSelectProps, CustomOption } from "./types";
import { defaultOptions, groupedOptions, menuMaxWidthOptions } from "./data";
import Select from "./Select";
import { formatOptionLabel } from "./helpers";

export default {
  title: "components/Form Elements/Select",
  component: Select,
  args: {
    size: "md",
    label: "Choose a programming language",
    inline: false,
    id: "programming-language",
    tooltipContent: "",
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
    menuIsOpen: {
      control: {
        type: "boolean",
      },
    },
    isMulti: {
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

const Template: Story<CustomSelectProps<CustomOption, boolean>> = (args) => {
  return <Select {...args} formatOptionLabel={formatOptionLabel} />;
};

export const Default = Template.bind({});

Default.args = {
  options: defaultOptions,
  isSearchable: false,
};

export const searchable = Template.bind({});

searchable.args = {
  options: defaultOptions,
  isSearchable: true,
};

export const WithRequired = Template.bind({});

WithRequired.args = {
  options: defaultOptions,
  required: true,
};

export const WithMenuMaxWidth = Template.bind({});

WithMenuMaxWidth.args = {
  options: menuMaxWidthOptions,
  minWidth: "300px",
  maxWidth: "300px",
  menuMaxWidth: 500,
};

export const withOpenMenu = Template.bind({});

withOpenMenu.args = {
  options: defaultOptions,
  menuIsOpen: true,
};

export const withGroupedOptions = Template.bind({});

withGroupedOptions.args = {
  options: groupedOptions,
};

export const withMultipleValues = Template.bind({});

withMultipleValues.args = {
  options: defaultOptions,
  isMulti: true,
};

export const withValueCreation = Template.bind({});

withValueCreation.args = {
  options: defaultOptions,
  isMulti: true,
  isClearable: true,
  type: "creatable",
};

export const withValueCreationValidation = Template.bind({});

withValueCreationValidation.args = {
  options: defaultOptions,
  isMulti: true,
  isClearable: true,
  type: "creatable",
  isInputValid: (value: string): boolean =>
    /^(?=.*[^\d])(?=.*\S).+$/.test(value) &&
    !defaultOptions.find((option) => option.label === value),
  // checkIfInputIsSelected: (inputValue: string): string => {
  //   return defaultOptions.find((option) => option.label === inputValue)
  //     ? "Already selected"
  //     : "No options";
  // },
};

export const AsyncSelect: Story<CustomSelectProps<CustomOption, boolean>> = (args) => {
  const [loading, setLoading] = useState(false);

  const onAsyncSearchChange = (inputText: string): Promise<CustomOption[]> => {
    setLoading(true);
    return new Promise<CustomOption[]>((resolve) => {
      // Simulating fetched options based on the inputText
      const simulatedResults = defaultOptions.filter((data) =>
        data.label.toLowerCase().includes(inputText.toLowerCase()),
      );
      setTimeout(() => {
        setLoading(false);
        resolve(simulatedResults);
      }, 2000);
    });
  };

  const customNoOptionsMessage = ({ inputValue }: { inputValue: string }) => {
    if (!inputValue) {
      return "Type 3 or more characters";
    }
    return `No results found for "${inputValue}"`;
  };

  return (
    <Select
      {...args}
      type="async"
      noOptionsMessage={customNoOptionsMessage}
      asyncOptions={{
        onAsyncSearchChange,
        status: {
          isLoading: loading,
          error: false,
        },
      }}
    />
  );
};
