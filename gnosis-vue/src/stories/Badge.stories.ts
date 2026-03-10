import type { Meta, StoryObj } from "@storybook/vue3";
import { Badge } from "../index";
import {
  badgeMeta,
  withBadgeContentArgs,
  withoutBadgeContentArgs,
  noContentWithPulseArgs,
} from "../../../src/components/Badge/Badge.meta";

const meta: Meta<typeof Badge> = {
  ...badgeMeta,
  component: Badge,
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const WithBadgeContent: Story = {
  args: withBadgeContentArgs,
  render: (args) => ({
    components: { Badge },
    setup: () => ({ args }),
    template: '<Badge v-bind="args" />',
  }),
};

export const WithoutBadgeContent: Story = {
  args: withoutBadgeContentArgs,
  render: (args) => ({
    components: { Badge },
    setup: () => ({ args }),
    template: '<Badge v-bind="args" />',
  }),
};

export const NoContentWithPulse: Story = {
  args: noContentWithPulseArgs,
  render: (args) => ({
    components: { Badge },
    setup: () => ({ args }),
    template: '<Badge v-bind="args" />',
  }),
};
