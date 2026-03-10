import type { Meta, StoryObj } from "@storybook/vue3";
import { Avatar } from "../index";
import { avatarMeta, avatarImageArgs, stringAvatarArgs } from "../../../src/components/Avatar/Avatar.meta";

const meta: Meta<typeof Avatar> = {
  ...avatarMeta,
  component: Avatar,
};
export default meta;

type Story = StoryObj<typeof Avatar>;

export const AvatarImage: Story = {
  args: avatarImageArgs,
  render: (args) => ({
    components: { Avatar },
    setup: () => ({ args }),
    template: '<Avatar v-bind="args" />',
  }),
};

export const StringAvatar: Story = {
  args: stringAvatarArgs,
  render: (args) => ({
    components: { Avatar },
    setup: () => ({ args }),
    template: '<Avatar v-bind="args">{{ args.children }}</Avatar>',
  }),
};
