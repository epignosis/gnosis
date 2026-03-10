export const textareaMeta = {
  title: "components/Form Elements/Textarea",
  args: {
    label: "Description",
    id: "textareaInput",
    inline: false,
    placeholder: "Type some description",
    resize: "none",
    status: "valid",
  },
  argTypes: {
    resize: {
      control: {
        type: "select",
        options: ["none", "vertical", "horizontal", "both"],
      },
    },
    status: {
      control: {
        type: "select",
        options: ["valid", "error"],
      },
    },
  },
};

export const defaultArgs = {};
export const disabledArgs = { disabled: true };
export const withRequiredArgs = { required: true };
export const withRowsArgs = { rows: 3 };
