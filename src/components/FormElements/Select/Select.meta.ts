export const selectMeta = {
  title: "components/Form Elements/Select",
  args: {
    size: "md",
    label: "Choose a programming language",
    inline: false,
    id: "programming-language",
    tooltipContent: "Tooltip placeholder",
    "aria-label": "Programming Language",
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
    allowTextWrap: {
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
};

export const defaultArgs = { isSearchable: false };
export const searchableArgs = { isSearchable: true };
export const withRequiredArgs = { required: true };
export const withMultipleValuesArgs = { isMulti: true };
