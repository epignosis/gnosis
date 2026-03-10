import type { Meta, StoryObj } from "@storybook/vue3";
import { Tooltip, Button } from "../index";
import {
  tooltipMeta,
  defaultArgs,
  withNoArrowArgs,
  withBorderColorArgs,
} from "../../../src/components/Tooltip/Tooltip.meta";

const meta: Meta<typeof Tooltip> = {
  ...tooltipMeta,
  component: Tooltip,
};
export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: defaultArgs,
  render: (args) => ({
    components: { Tooltip, Button },
    setup: () => ({ args }),
    template:
      '<div style="margin-top: 150px; display: flex; justify-content: center;">' +
      '<Tooltip v-bind="args"><Button>Hover me</Button></Tooltip>' +
      "</div>",
  }),
};

export const WithNoArrow: Story = {
  args: withNoArrowArgs,
  render: (args) => ({
    components: { Tooltip, Button },
    setup: () => ({ args }),
    template:
      '<div style="margin-top: 150px; display: flex; justify-content: center;">' +
      '<Tooltip v-bind="args"><Button>Hover me</Button></Tooltip>' +
      "</div>",
  }),
};

export const WithBorderColor: Story = {
  args: withBorderColorArgs,
  render: (args) => ({
    components: { Tooltip, Button },
    setup: () => ({ args }),
    template:
      '<div style="margin-top: 150px; display: flex; justify-content: center;">' +
      '<Tooltip v-bind="args"><Button>Hover me</Button></Tooltip>' +
      "</div>",
  }),
};
