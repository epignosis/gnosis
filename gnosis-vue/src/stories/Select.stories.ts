import type { Meta, StoryObj } from "@storybook/vue3";
import { Select } from "../index";
import {
  selectMeta,
  defaultArgs,
  searchableArgs,
  withMultipleValuesArgs,
} from "../../../src/components/FormElements/Select/Select.meta";

const defaultOptions = [
  { label: "JavaScript", value: "js" },
  { label: "TypeScript", value: "ts" },
  { label: "Python", value: "py" },
  { label: "Rust", value: "rs" },
];

const meta: Meta<typeof Select> = {
  ...selectMeta,
  component: Select,
};
export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: { ...defaultArgs, options: defaultOptions },
  render: (args) => ({
    components: { Select },
    setup: () => ({ args }),
    template: '<div style="max-width: 400px"><Select v-bind="args" /></div>',
  }),
};

export const Searchable: Story = {
  args: { ...searchableArgs, options: defaultOptions },
  render: (args) => ({
    components: { Select },
    setup: () => ({ args }),
    template: '<div style="max-width: 400px"><Select v-bind="args" /></div>',
  }),
};

export const MultipleValues: Story = {
  args: { ...withMultipleValuesArgs, options: defaultOptions },
  render: (args) => ({
    components: { Select },
    setup: () => ({ args }),
    template: '<div style="max-width: 400px"><Select v-bind="args" /></div>',
  }),
};
