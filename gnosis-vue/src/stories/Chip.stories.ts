import type { Meta, StoryObj } from "@storybook/vue3";
import { Chip } from "../index";
import { chipMeta, defaultArgs, customArgs } from "../../../src/components/Chip/Chip.meta";

const meta: Meta<typeof Chip> = {
  ...chipMeta,
  component: Chip,
};
export default meta;

type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: defaultArgs,
  render: (args) => ({
    components: { Chip },
    setup: () => ({ args }),
    template: '<Chip v-bind="args">{{ args.children }}</Chip>',
  }),
};

export const Custom: Story = {
  args: customArgs,
  render: (args) => ({
    components: { Chip },
    setup: () => ({ args }),
    template: '<Chip v-bind="args">{{ args.children }}</Chip>',
  }),
};