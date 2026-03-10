import type { Meta, StoryObj } from "@storybook/vue3";
import { Tabs } from "../index";
import { tabsMeta, basicArgs } from "../../../src/components/Tabs/Tabs.meta";

const meta: Meta<typeof Tabs> = {
  ...tabsMeta,
  component: Tabs,
};
export default meta;

type Story = StoryObj<typeof Tabs>;

const tabs = [
  { title: "Completed courses", content: "Completed courses content!", id: "completed-courses" },
  { title: "My super points", content: "My super points content!", id: "super-points" },
  { title: "My superior level", content: "My superior level content!", id: "superior-level" },
];

export const Basic: Story = {
  args: { ...basicArgs, tabs },
  render: (args) => ({
    components: { Tabs },
    setup: () => ({ args }),
    template: '<Tabs v-bind="args" />',
  }),
};

export const SelectedTab: Story = {
  args: { ...basicArgs, selectedTab: 2, tabs },
  render: (args) => ({
    components: { Tabs },
    setup: () => ({ args }),
    template: '<Tabs v-bind="args" />',
  }),
};
