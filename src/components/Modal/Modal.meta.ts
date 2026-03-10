export const modalMeta = {
  title: "Components/Modal",
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["md", "lg", "fullscreen"],
      },
    },
  },
  args: {
    size: "md",
  },
};
