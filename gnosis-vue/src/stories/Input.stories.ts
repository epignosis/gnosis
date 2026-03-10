import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import { Input } from "../index";
import {
  inputMeta,
  withAutoFocusArgs,
  disabledArgs,
  withRequiredArgs,
  withErrorArgs,
} from "../../../src/components/FormElements/Input/Input.meta";

const meta: Meta<typeof Input> = {
  ...inputMeta,
  component: Input,
};
export default meta;

type Story = StoryObj<typeof Input>;

const makeTemplate = (args: Record<string, unknown>) => ({
  components: { Input },
  setup: () => {
    const value = ref("");
    return { args, value };
  },
  template: '<div style="max-width: 400px"><Input v-bind="args" v-model="value" /></div>',
});

export const Default: Story = {
  render: makeTemplate,
};

export const WithAutoFocus: Story = {
  args: withAutoFocusArgs,
  render: makeTemplate,
};

export const Disabled: Story = {
  args: disabledArgs,
  render: makeTemplate,
};

export const WithRequired: Story = {
  args: withRequiredArgs,
  render: makeTemplate,
};

export const WithError: Story = {
  args: withErrorArgs,
  render: makeTemplate,
};
