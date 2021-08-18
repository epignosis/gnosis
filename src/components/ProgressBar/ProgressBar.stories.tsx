import React, { ReactNode } from "react";
import { Story } from "@storybook/react";
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
        options: ["md", "lg"],
      },
    },
  },
  decorators: [
    (story: () => ReactNode): JSX.Element => <div style={{ maxWidth: 500 }}>{story()}</div>,
  ],
};

export const Default: Story<ProgressBarProps> = (args) => <ProgressBar {...args} />;

Default.args = {
  size: "md",
  percent: 75,
};
