import type { Meta, StoryObj } from "@storybook/vue3";
import { ProgressBar } from "../index";
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
} from "../../../src/components/ProgressBar/ProgressBar.meta";

const meta: Meta<typeof ProgressBar> = {
  ...progressBarMeta,
  component: ProgressBar,
};
export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: defaultArgs,
  render: (args) => ({
    components: { ProgressBar },
    setup: () => ({ args }),
    template: '<div style="max-width: 500px"><ProgressBar v-bind="args" /></div>',
  }),
};

export const CustomSize: Story = {
  args: customSizeArgs,
  render: (args) => ({
    components: { ProgressBar },
    setup: () => ({ args }),
    template: '<div style="max-width: 500px"><ProgressBar v-bind="args" /></div>',
  }),
};

export const CustomText: Story = {
  args: customTextArgs,
  render: (args) => ({
    components: { ProgressBar },
    setup: () => ({ args }),
    template: '<div style="max-width: 500px"><ProgressBar v-bind="args" /></div>',
  }),
};

export const PercentageAfter: Story = {
  args: percentageAfterArgs,
  render: (args) => ({
    components: { ProgressBar },
    setup: () => ({ args }),
    template: '<div style="max-width: 500px"><ProgressBar v-bind="args" /></div>',
  }),
};

export const Large: Story = {
  args: largeArgs,
  render: (args) => ({
    components: { ProgressBar },
    setup: () => ({ args }),
    template: '<div style="max-width: 500px"><ProgressBar v-bind="args" /></div>',
  }),
};

export const Small: Story = {
  args: smallArgs,
  render: (args) => ({
    components: { ProgressBar },
    setup: () => ({ args }),
    template: '<div style="max-width: 500px"><ProgressBar v-bind="args" /></div>',
  }),
};

export const ExtraSmall: Story = {
  args: extraSmallArgs,
  render: (args) => ({
    components: { ProgressBar },
    setup: () => ({ args }),
    template: '<div style="max-width: 500px"><ProgressBar v-bind="args" /></div>',
  }),
};

export const WithLabelBefore: Story = {
  args: withLabelBeforeArgs,
  render: (args) => ({
    components: { ProgressBar },
    setup: () => ({ args }),
    template: '<div style="max-width: 500px"><ProgressBar v-bind="args" /></div>',
  }),
};

export const WithLabelAfter: Story = {
  args: withLabelAfterArgs,
  render: (args) => ({
    components: { ProgressBar },
    setup: () => ({ args }),
    template: '<div style="max-width: 500px"><ProgressBar v-bind="args" /></div>',
  }),
};
