export const checkboxMeta = {
  title: "components/Form Elements/Checkbox/Checkbox",
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["md", "lg"],
      },
    },
  },
  args: {
    size: "md",
    inline: false,
    disabled: false,
  },
};

export const withRequiredArgs = { required: true };
