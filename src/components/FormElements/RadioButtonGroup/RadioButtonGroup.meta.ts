export const radioButtonGroupMeta = {
  title: "components/Form Elements/Radio Button Group",
  args: {
    id: "radioButtonGroup",
    size: "md",
    className: "radioButtonGroupStory",
    options: [
      { label: "All", value: "all" },
      { label: "In progress", value: "progress" },
      { label: "Completed", value: "completed" },
      { label: "Failed", value: "failed" },
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
};
