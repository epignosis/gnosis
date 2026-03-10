export const inputMeta = {
  title: "components/Form Elements/Input",
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["sm", "md", "lg"],
      },
    },
    status: {
      control: {
        type: "select",
        options: ["valid", "error"],
      },
    },
    autoFocus: {
      control: {
        type: "boolean",
      },
    },
  },
  args: {
    id: "input",
    size: "md",
    placeholder: "Your LMS username",
    label: "Username",
    inline: false,
    isClearable: false,
    status: "valid",
    className: "inputStory",
    tooltipContent: "",
    autoFocus: false,
    disabled: false,
  },
};

export const defaultArgs = {};
export const withAutoFocusArgs = { autoFocus: true };
export const disabledArgs = { disabled: true };
export const withRequiredArgs = { required: true };
export const withErrorArgs = { status: "error" };
