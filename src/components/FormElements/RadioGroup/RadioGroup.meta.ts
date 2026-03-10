export const radioGroupMeta = {
  title: "components/Form Elements/Radio Group",
  args: {
    size: "md",
    inline: false,
    initialValue: "",
    groupname: "radio-group",
    id: "radioGroupStory",
    className: "radioGroupStory",
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
    initialValue: {
      control: {
        type: "select",
        options: ["all", "progress", "completed", "failed"],
      },
    },
  },
};

export const defaultArgs = {};
export const withInitialValueArgs = {
  groupname: "radio-group-with-value",
  initialValue: "completed",
};
