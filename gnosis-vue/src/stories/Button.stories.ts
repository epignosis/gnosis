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
    template: `
      <div>
        <div style="margin-bottom: 16px">
          <Button v-bind="args" size="sm" />
          <span style="margin-right: 16px" />
          <Button v-bind="args" size="sm" variant="outline" />
          <span style="margin-right: 16px" />
          <Button v-bind="args" size="sm" variant="ghost" />
          <span style="margin-right: 16px" />
          <Button v-bind="args" size="sm" variant="link" />
        </div>
        <div style="margin-bottom: 16px">
          <Button v-bind="args" />
          <span style="margin-right: 16px" />
          <Button v-bind="args" variant="outline" />
          <span style="margin-right: 16px" />
          <Button v-bind="args" variant="ghost" />
          <span style="margin-right: 16px" />
          <Button v-bind="args" variant="link" />
        </div>
        <div style="margin-bottom: 16px">
          <Button v-bind="args" size="lg" />
          <span style="margin-right: 16px" />
          <Button v-bind="args" size="lg" variant="outline" />
          <span style="margin-right: 16px" />
          <Button v-bind="args" size="lg" variant="ghost" />
          <span style="margin-right: 16px" />
          <Button v-bind="args" size="lg" variant="link" />
        </div>
      </div>
    `,
  }),
};

export const Secondary: Story = {
  args: secondaryArgs,
  render: (args) => ({
    components: { Button },
    setup: () => ({ args }),
    template: '<Button v-bind="args">Secondary</Button>',
  }),
};

export const Danger: Story = {
  args: dangerArgs,
  render: (args) => ({
    components: { Button },
    setup: () => ({ args }),
    template: '<Button v-bind="args">Danger</Button>',
  }),
};

export const Success: Story = {
  args: successArgs,
  render: (args) => ({
    components: { Button },
    setup: () => ({ args }),
    template: '<Button v-bind="args">Success</Button>',
  }),
};

export const PrimaryDarker: Story = {
  args: primaryDarkerArgs,
  render: (args) => ({
    components: { Button },
    setup: () => ({ args }),
    template: '<Button v-bind="args">Primary darker</Button>',
  }),
};

export const Orange: Story = {
  args: orangeArgs,
  render: (args) => ({
    components: { Button },
    setup: () => ({ args }),
    template: '<Button v-bind="args">Orange</Button>',
  }),
};