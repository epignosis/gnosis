import type { Meta, StoryObj } from "@storybook/vue3";
import { Checkbox } from "../index";
import { checkboxMeta } from "../../../src/components/FormElements/CheckboxGroup/Checkbox.meta";

const meta: Meta<typeof Checkbox> = {
  ...checkboxMeta,
  component: Checkbox,
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: (args) => ({
    components: { Checkbox },
    setup: () => ({ args }),
    template:
      '<Checkbox v-bind="args" id="checkbox-1" label="Accept terms" value="accepted" name="terms" />',
  }),
};

export const Disabled: Story = {
  render: (args) => ({
    components: { Checkbox },
    setup: () => ({ args }),
    template:
      '<Checkbox v-bind="args" id="checkbox-disabled" label="Disabled option" value="disabled" name="disabled" :disabled="true" />',
  }),
};
