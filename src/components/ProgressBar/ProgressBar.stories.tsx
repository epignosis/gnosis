import React, { ReactNode } from "react";
import { StoryFn } from "@storybook/react";
import ProgressBar, { ProgressBarProps } from "./ProgressBar";

export default {
  component: ProgressBar,
  title: "Components/ProgressBar",
  argTypes: {
    percent: {
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 1,
      },
    },
    size: {
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg"],
      },
    },
    color: {
      control: {
        type: "select",
        options: ["success", "primary"],
      },
    },
  },
  decorators: [
    (story: () => ReactNode): JSX.Element => <div style={{ maxWidth: 500 }}>{story()}</div>,
  ],
};

const Template: StoryFn<ProgressBarProps> = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});

Default.args = {
  size: "md",
  percent: 75,
};

export const Large = Template.bind({});

Large.args = {
  size: "lg",
  percent: 75,
};

export const Small = Template.bind({});

Small.args = {
  size: "sm",
  percent: 75,
};

export const ExtraSmall = Template.bind({});

ExtraSmall.args = {
  size: "xs",
  percent: 75,
};

export const WithLabelBefore = Template.bind({});

WithLabelBefore.args = {
  size: "md",
  percent: 75,
  labelBefore: "Completed 75%",
};

export const WithLabelAfter = Template.bind({});

WithLabelAfter.args = {
  size: "sm",
  percent: 75,
  labelAfter: "Completed 75%",
};

export const White: StoryFn<ProgressBarProps> = (args) => (
  <div style={{ background: "#103E6B", padding: "2rem" }}>
    <ProgressBar {...args} />
  </div>
);

White.args = {
  size: "md",
  percent: 75,
  labelAfter: "Completed 75%",
  color: "white",
};
