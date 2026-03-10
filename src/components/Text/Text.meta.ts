export const textMeta = {
  title: "Components/Text",
  argTypes: {
    weight: {
      control: {
        type: "select",
        options: ["400", "700"],
      },
    },
    fontSize: {
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"],
      },
    },
    as: {
      control: {
        type: "select",
        options: ["span", "div", "p"],
      },
    },
  },
};

export const defaultArgs = {
  weight: "400",
  fontSize: "md",
  as: "span",
  children: "This is some text",
};
