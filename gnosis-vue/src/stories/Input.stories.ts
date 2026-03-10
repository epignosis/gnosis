import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import { Input } from "../index";
import {
  inputMeta,
  defaultArgs,
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

const inputTemplate = (args: Record<string, unknown>) => ({
  components: { Input },
  setup: () => {
    const value = ref("");
    return { args, value };
  },
  template: '<div style="max-width: 400px"><Input v-bind="args" v-model="value" /></div>',
});

export const Default: Story = {
  args: defaultArgs,
  render: inputTemplate,
};

export const WithAutoFocus: Story = {
  args: withAutoFocusArgs,
  render: inputTemplate,
};

export const Disabled: Story = {
  args: disabledArgs,
  render: inputTemplate,
};

export const WithRequired: Story = {
  args: withRequiredArgs,
  render: inputTemplate,
};

export const WithError: Story = {
  args: withErrorArgs,
  render: inputTemplate,
};
