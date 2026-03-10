export const loaderMeta = {
  title: "Components/Loader",
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["md", "lg"],
      },
    },
    type: {
      control: {
        type: "select",
        options: ["pulse", "clip"],
      },
    },
  },
  args: {
    size: "md",
    fullScreen: false,
  },
};

export const clipLoaderArgs = { type: "clip" };
