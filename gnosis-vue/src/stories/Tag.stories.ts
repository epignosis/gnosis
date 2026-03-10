import type { Meta, StoryObj } from "@storybook/vue3";
import { Tag } from "../index";
import { tagMeta, defaultArgs, customArgs } from "../../../src/components/Tag/Tag.meta";

const meta: Meta<typeof Tag> = {
  ...tagMeta,
  component: Tag,
};
export default meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: defaultArgs,
  render: (args) => ({
    components: { Tag },
    setup: () => ({ args }),
    template: '<Tag v-bind="args">{{ args.children }}</Tag>',
  }),
};

export const Custom: Story = {
  args: customArgs,
  render: (args) => ({
    components: { Tag },
    setup: () => ({ args }),
    template: '<Tag v-bind="args">{{ args.children }}</Tag>',
  }),
};
