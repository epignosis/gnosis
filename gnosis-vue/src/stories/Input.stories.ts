import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import { Input } from "../index";
import {
  inputMeta,
  defaultArgs,
  disabledArgs,
  withRequiredArgs,
  withErrorArgs,
  withAutoFocusArgs,
} from "../../../src/components/FormElements/Input/Input.meta";

const meta: Meta<typeof Input> = {
  ...inputMeta,
  component: Input,
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: defaultArgs,
  render: (args) => ({
    components: { Input },
    setup: () => {
      const value = ref("");
      return { args, value };
    },
    template: '<div style="max-width: 400px"><Input v-bind="args" v-model="value" /></div>',
  }),
};

export const WithAutoFocus: Story = {
  args: withAutoFocusArgs,
  render: (args) => ({
    components: { Input },
    setup: () => {
      const value = ref("");
      return { args, value };
    },
    template: '<div style="max-width: 400px"><Input v-bind="args" v-model="value" /></div>',
  }),
};

export const Disabled: Story = {
  args: disabledArgs,
  render: (args) => ({
    components: { Input },
    setup: () => {
      const value = ref("");
      return { args, value };
    },
    template: '<div style="max-width: 400px"><Input v-bind="args" v-model="value" /></div>',
  }),
};

export const WithRequired: Story = {
  args: withRequiredArgs,
  render: (args) => ({
    components: { Input },
    setup: () => {
      const value = ref("");
      return { args, value };
    },
    template: '<div style="max-width: 400px"><Input v-bind="args" v-model="value" /></div>',
  }),
};

export const WithError: Story = {
  args: withErrorArgs,
  render: (args) => ({
    components: { Input },
    setup: () => {
      const value = ref("");
      return { args, value };
    },
    template: '<div style="max-width: 400px"><Input v-bind="args" v-model="value" /></div>',
  }),
};