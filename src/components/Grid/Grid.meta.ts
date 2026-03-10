export const gridMeta = {
  title: "Components/Grid",
  argTypes: {
    as: {
      control: {
        type: "select",
        options: ["div", "article", "section"],
      },
    },
  },
  args: {
    templateColumns: [1, 2, 3, 4, 5, 6, 7],
    gap: 2,
    as: "div",
    rowGap: 1,
    columnGap: 0,
    className: "gridStory",
  },
};
