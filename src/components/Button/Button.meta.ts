import { colors } from "@theme/default/colors";

export const buttonMeta = {
  title: "Components/Button",
  argTypes: {
    onClick: { action: "clicked" },
    color: {
      control: {
        type: "select",
        options: ["primary", "secondary", "danger", "success", "primaryLight"],
      },
    },
  },
  args: {
    disabled: false,
    isLoading: false,
    block: false,
    noGutters: false,
    rounded: false,
    as: "button",
    underlined: false,
    active: false,
  },
};

export const primaryArgs = { color: "primary", children: "Primary" };
export const secondaryArgs = { color: "secondary", children: "Secondary" };
export const dangerArgs = { color: "danger", children: "Danger" };
export const successArgs = { color: "success", children: "Success" };
export const primaryLightArgs = {
  color: "primaryLight",
  children: "Primary light",
  style: { background: colors.primary.darker, padding: "1.25rem 1.25rem 0.25rem" },
};
export const primaryDarkerArgs = { color: "primaryDarker", children: "Primary darker" };
export const orangeArgs = { color: "orange", children: "Orange" };