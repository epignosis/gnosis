export const statusTagMeta = {
  title: "Components/StatusTag",
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      options: [
        "neutral",
        "positive",
        "negative",
        "inactive",
        "warning",
        "promo",
        "pale",
        "grey",
        "red",
        "transparent",
      ],
    },
    fontWeight: {
      control: {
        type: "select",
      },
      options: ["400", "700"],
    },
  },
};
