import type { Meta, StoryObj } from "@storybook/vue3";
import { Text } from "../index";
import { textMeta, defaultArgs } from "../../../src/components/Text/Text.meta";

const meta: Meta<typeof Text> = {
  ...textMeta,
  component: Text,
};
export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: defaultArgs,
  render: (args) => ({
    components: { Text },
    setup: () => ({ args }),
    template: '<Text v-bind="args">{{ args.children }}</Text>',
  }),
};