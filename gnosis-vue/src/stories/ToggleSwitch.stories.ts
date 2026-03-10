import type { Meta, StoryObj } from "@storybook/vue3";
import { ToggleSwitch } from "../index";
import {
  toggleSwitchMeta,
  defaultArgs,
  withDescriptionArgs,
  withLabelAfterArgs,
  completeExampleArgs,
} from "../../../src/components/FormElements/ToggleSwitch/ToggleSwitch.meta";

const meta: Meta<typeof ToggleSwitch> = {
  ...toggleSwitchMeta,
  component: ToggleSwitch,
};
export default meta;

type Story = StoryObj<typeof ToggleSwitch>;

export const Default: Story = {
  args: defaultArgs,
  render: (args) => ({
    components: { ToggleSwitch },
    setup: () => ({ args }),
    template:
      '<div style="max-width: 600px; padding: 1rem;"><ToggleSwitch v-bind="args" /></div>',
  }),
};

export const WithDescription: Story = {
  args: withDescriptionArgs,
  render: (args) => ({
    components: { ToggleSwitch },
    setup: () => ({ args }),
    template:
      '<div style="max-width: 600px; padding: 1rem;"><ToggleSwitch v-bind="args" /></div>',
  }),
};

export const WithLabelAfter: Story = {
  args: withLabelAfterArgs,
  render: (args) => ({
    components: { ToggleSwitch },
    setup: () => ({ args }),
    template:
      '<div style="max-width: 600px; padding: 1rem;"><ToggleSwitch v-bind="args" /></div>',
  }),
};

export const CompleteExample: Story = {
  args: completeExampleArgs,
  render: (args) => ({
    components: { ToggleSwitch },
    setup: () => ({ args }),
    template:
      '<div style="max-width: 600px; padding: 1rem;"><ToggleSwitch v-bind="args" /></div>',
  }),
};
