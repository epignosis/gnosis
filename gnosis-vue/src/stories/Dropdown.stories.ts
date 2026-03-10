import type { Meta, StoryObj } from "@storybook/vue3";
import { Button, Dropdown } from "../index";
import { dropdownMeta } from "../../../src/components/Dropdown/Dropdown.meta";

const dropdownList = [
  {
    label: "Category 1",
    items: [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
    ],
  },
  { label: "Option 3", value: "3" },
];

const meta: Meta<typeof Dropdown> = {
  ...dropdownMeta,
  component: Dropdown,
};
export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  render: (args) => ({
    components: { Dropdown, Button },
    setup: () => ({ args, dropdownList }),
    template:
      '<Dropdown v-bind="args" :list="dropdownList"><Button>Open Dropdown</Button></Dropdown>',
  }),
};
