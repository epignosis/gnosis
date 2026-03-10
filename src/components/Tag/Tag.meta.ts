import { colors } from "@theme/default/colors";

export const tagMeta = {
  title: "Components/Tag",
};

export const defaultArgs = { children: "This is a default tag" };
export const customArgs = {
  children: "This is a custom tag",
  style: {
    backgroundColor: colors.red.base,
    color: colors.black,
  },
};