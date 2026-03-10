import type { Meta, StoryObj } from "@storybook/vue3";
import { ToastNotification } from "../index";
import { toastMeta, infoArgs, successArgs, warningArgs, errorArgs } from "../../../src/components/Toast/Toast.meta";

const meta: Meta<typeof ToastNotification> = {
  ...toastMeta,
  component: ToastNotification,
};
export default meta;

type Story = StoryObj<typeof ToastNotification>;

export const Info: Story = {
  args: infoArgs,
  render: (args) => ({
    components: { ToastNotification },
    setup: () => ({ args }),
    template: '<ToastNotification v-bind="args" />',
  }),
};

export const Success: Story = {
  args: successArgs,
  render: (args) => ({
    components: { ToastNotification },
    setup: () => ({ args }),
    template: '<ToastNotification v-bind="args" />',
  }),
};

export const Warning: Story = {
  args: warningArgs,
  render: (args) => ({
    components: { ToastNotification },
    setup: () => ({ args }),
    template: '<ToastNotification v-bind="args" />',
  }),
};

export const Error: Story = {
  args: errorArgs,
  render: (args) => ({
    components: { ToastNotification },
    setup: () => ({ args }),
    template: '<ToastNotification v-bind="args" />',
  }),
};
