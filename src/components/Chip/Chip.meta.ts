import { colors } from "@theme/default/colors";

export const chipMeta = {
  title: "Components/Chip",
  argTypes: {
    onClose: { action: "clicked" },
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
  children: "This is a default chip",
};
export const customArgs = {
  size: "md",
  children: "This is a custom chip",
  style: {
    backgroundColor: colors.red.base,
    color: colors.black,
  },
};
export const filtersArgs = {
  size: "md",
  children: "Filter",
  maxWidth: 100,
  closeButtonAriaLabel: "Remove filter",
};
