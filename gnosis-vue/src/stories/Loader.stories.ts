import type { Meta, StoryObj } from "@storybook/vue3";
import { Loader } from "../index";
import { loaderMeta, clipLoaderArgs } from "../../../src/components/Loaders/Loader.meta";

const meta: Meta<typeof Loader> = {
  ...loaderMeta,
  component: Loader,
};
export default meta;

type Story = StoryObj<typeof Loader>;

export const PulseLoader: Story = {
  render: (args) => ({
    components: { Loader },
    setup: () => ({ args }),
    template: '<Loader v-bind="args" />',
  }),
};

export const ClipLoader: Story = {
  args: clipLoaderArgs,
  render: (args) => ({
    components: { Loader },
    setup: () => ({ args }),
    template: '<Loader v-bind="args" />',
  }),
};
