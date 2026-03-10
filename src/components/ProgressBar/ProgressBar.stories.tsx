import React, { ReactNode } from "react";
import { StoryFn } from "@storybook/react";
import ProgressBar, { ProgressBarProps } from "./ProgressBar";
import {
  progressBarMeta,
  defaultArgs,
  customSizeArgs,
  customTextArgs,
  percentageAfterArgs,
  largeArgs,
  smallArgs,
  extraSmallArgs,
  withLabelBeforeArgs,
  withLabelAfterArgs,
  darkGreenArgs,
} from "./ProgressBar.meta";

export default { ...progressBarMeta, component: ProgressBar };

const Template: StoryFn<ProgressBarProps> = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});

Default.args = defaultArgs;

export const CustomRadius = Template.bind({});

CustomRadius.args = {
  size: "md",
  percent: 40,
  borderRadius: {
    startStartRadius: 0,
    startEndRadius: 6,
    endEndRadius: 6,
    endStartRadius: 0,
  },
};

export const CustomSize = Template.bind({});

CustomSize.args = customSizeArgs;

export const CustomText = Template.bind({});

CustomText.args = customTextArgs;

export const PercentageAfter = Template.bind({});

PercentageAfter.args = percentageAfterArgs;

export const Large = Template.bind({});

Large.args = largeArgs;

export const Small = Template.bind({});

Small.args = smallArgs;

export const ExtraSmall = Template.bind({});

ExtraSmall.args = extraSmallArgs;

export const WithLabelBefore = Template.bind({});

WithLabelBefore.args = withLabelBeforeArgs;

export const WithLabelAfter = Template.bind({});

WithLabelAfter.args = withLabelAfterArgs;

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

export const DarkGreen = Template.bind({});

DarkGreen.args = darkGreenArgs;

export const CourseCardProgress = Template.bind({});

CourseCardProgress.args = {
  size: 10,
  percent: 75,
  color: "darkgreen",
  fontSize: "xs",
  borderRadius: {
    startStartRadius: 0,
    startEndRadius: 6,
    endEndRadius: 6,
    endStartRadius: 0,
  },
  percentageAfter: true,
};
