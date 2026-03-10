export const headingMeta = {
  title: "Components/Headings",
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["sm", "md", "lg", "xl", "2xl", "3xl"],
      },
    },
    as: {
      control: {
        type: "select",
        options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      },
    },
  },
  args: {
    children: "The quick brown fox jumps over the lazy dog",
  },
};

export const h1Args = { size: "3xl", as: "h1" };
export const h2Args = { size: "2xl", as: "h2" };
export const h3Args = { size: "xl", as: "h3" };
export const h4Args = { size: "lg", as: "h4" };
export const h5Args = { size: "md", as: "h5" };
export const h6Args = { size: "sm", as: "h6" };
