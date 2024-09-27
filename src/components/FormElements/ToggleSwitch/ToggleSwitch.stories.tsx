import React from "react";
import { Story } from "@storybook/react";
import { PreviewIconSVG } from "../../../icons";
import ToggleSwitch, { ToggleProps } from "./ToggleSwitch";

export default {
  title: "components/Form Elements/ToggleSwitch",
  component: ToggleSwitch,
  args: {
    id: "toggle-switch",
    labelBefore: "Before",
    inlineTextTranslations: { enabled: "Enabled", disabled: "Disabled" },
  },
  decorators: [
    (Story: Story): JSX.Element => (
      <div style={{ maxWidth: 500 }}>
        <Story />
      </div>
    ),
  ],
};

const Template: Story<ToggleProps> = (args) => <ToggleSwitch {...args} />;

export const Default = Template.bind({});

export const WithInternalIcon = Template.bind({});

WithInternalIcon.args = {
  size: "md",
  InternalIcon: <PreviewIconSVG height={32} />,
};

export const WithSubtitle = Template.bind({});

WithSubtitle.args = {
  subtitle: "This is a subtitle for the toggle",
};
