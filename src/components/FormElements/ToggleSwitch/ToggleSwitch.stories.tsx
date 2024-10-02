import React from "react";
import { StoryFn } from "@storybook/react";
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
    (Story: StoryFn): JSX.Element => (
      <div style={{ maxWidth: 500 }}>
        <Story />
      </div>
    ),
  ],
};

const Template: StoryFn<ToggleProps> = (args) => <ToggleSwitch {...args} />;

export const Default = Template.bind({});

export const WithInternalIcon = Template.bind({});

WithInternalIcon.args = {
  size: "md",
  InternalIcon: <PreviewIconSVG height={32} />,
};
