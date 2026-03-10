export const resultMeta = {
  title: "Components/Result",
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["md", "lg"],
      },
    },
  },
};

export const defaultArgs = {
  size: "md",
  title: "This course has no content",
  info: "This course is still under construction and will be ready soon",
};
