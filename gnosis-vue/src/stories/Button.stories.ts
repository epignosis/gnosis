import type { Meta, StoryObj } from "@storybook/vue3";
import { Button } from "../index";
import {
  buttonMeta,
  primaryArgs,
  secondaryArgs,
  dangerArgs,
  successArgs,
  primaryDarkerArgs,
  orangeArgs,
} from "../../../src/components/Button/Button.meta";

const meta: Meta<typeof Button> = {
  ...buttonMeta,
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: primaryArgs,
  render: (args) => ({
    components: { Button },
    setup: () => ({ args }),
    template: '<Button v-bind="args">{{ args.children || "Primary" }}</Button>',
  }),
};

export const Secondary: Story = {
  args: secondaryArgs,
  render: (args) => ({
    components: { Button },
    setup: () => ({ args }),
    template: '<Button v-bind="args">{{ args.children || "Secondary" }}</Button>',
  }),
};

export const Danger: Story = {
  args: dangerArgs,
  render: (args) => ({
    components: { Button },
    setup: () => ({ args }),
    template: '<Button v-bind="args">{{ args.children || "Danger" }}</Button>',
  }),
};

export const Success: Story = {
  args: successArgs,
  render: (args) => ({
    components: { Button },
    setup: () => ({ args }),
    template: '<Button v-bind="args">{{ args.children || "Success" }}</Button>',
  }),
};

export const PrimaryDarker: Story = {
  args: primaryDarkerArgs,
  render: (args) => ({
    components: { Button },
    setup: () => ({ args }),
    template: '<Button v-bind="args">{{ args.children || "Primary Darker" }}</Button>',
  }),
};

export const Orange: Story = {
  args: orangeArgs,
  render: (args) => ({
    components: { Button },
    setup: () => ({ args }),
    template: '<Button v-bind="args">{{ args.children || "Orange" }}</Button>',
  }),
};
