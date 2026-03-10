export const badgeMeta = {
  title: "Components/Badge",
  argTypes: {
    size: {
      control: {
        type: "select",
      },
      options: ["md", "lg"],
    },
    withPulse: {
      control: "boolean",
    },
  },
  args: {
    withPulse: false,
  },
};

export const withBadgeContentArgs = {
  offset: { right: "-15px", top: "-7px" },
  children: "Notifications",
  size: "md",
  badgeContent: "5",
};
export const withoutBadgeContentArgs = {
  offset: { right: "-8px", top: "0px" },
  children: "Notifications",
  size: "md",
};
export const noContentWithPulseArgs = {
  children: "Notifications",
  size: "lg",
  withPulse: true,
};
