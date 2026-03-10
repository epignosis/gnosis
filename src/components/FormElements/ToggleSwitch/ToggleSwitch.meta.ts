export const toggleSwitchMeta = {
  title: "components/Form Elements/ToggleSwitch",
  args: {
    id: "toggle-switch",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "success"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md"],
    },
    isDisabled: {
      control: "boolean",
    },
    defaultChecked: {
      control: "boolean",
    },
    required: {
      control: "boolean",
    },
    hasInlineText: {
      control: "boolean",
    },
    showOutlineBorder: {
      control: "boolean",
    },
    preventToggle: {
      control: "boolean",
    },
    notSwitchedOff: {
      control: "boolean",
    },
  },
};

export const defaultArgs = { labelBefore: "Enable feature" };
export const withDescriptionArgs = {
  labelBefore: "Notifications",
  description: "Receive email notifications for important updates",
};
export const withLabelAfterArgs = { labelAfter: "Dark mode", required: true };
export const completeExampleArgs = {
  labelBefore: "Enterprise features",
  description: "Enable advanced enterprise functionality",
  subtitle: "Requires administrator approval",
  tooltip: "Contact your system administrator to enable these features",
  variant: "success",
  size: "md",
  hasInlineText: true,
  required: true,
  showOutlineBorder: true,
};
