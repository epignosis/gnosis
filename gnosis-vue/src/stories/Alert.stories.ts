import type { Meta, StoryObj } from "@storybook/vue3";
import { Alert } from "../index";
import {
  alertMeta,
  infoArgs,
  dangerArgs,
  successArgs,
  warningArgs,
} from "../../../src/components/Alert/Alert.meta";

const meta: Meta<typeof Alert> = {
  ...alertMeta,
  component: Alert,
};
export default meta;

type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: infoArgs,
  render: (args) => ({
    components: { Alert },
    setup: () => ({ args }),
    template: '<Alert v-bind="args">This is an alert!</Alert>',
  }),
};

export const Danger: Story = {
  args: dangerArgs,
  render: (args) => ({
    components: { Alert },
    setup: () => ({ args }),
    template: '<Alert v-bind="args">This is an alert!</Alert>',
  }),
};

export const Success: Story = {
  args: successArgs,
  render: (args) => ({
    components: { Alert },
    setup: () => ({ args }),
    template: '<Alert v-bind="args">This is an alert!</Alert>',
  }),
};

export const Warning: Story = {
  args: warningArgs,
  render: (args) => ({
    components: { Alert },
    setup: () => ({ args }),
    template: '<Alert v-bind="args">This is an alert!</Alert>',
  }),
};
