import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import { Modal, Button } from "../index";
import { modalMeta } from "../../../src/components/Modal/Modal.meta";

const meta: Meta<typeof Modal> = {
  ...modalMeta,
  component: Modal,
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: (args) => ({
    components: { Modal, Button },
    setup: () => {
      const isOpen = ref(false);
      return { args, isOpen };
    },
    template: `
      <div>
        <Button @click="isOpen = true">Open Modal</Button>
        <Modal v-bind="args" :isOpen="isOpen" @close="isOpen = false">
          <template #header>This is the modal title</template>
          <template #body>This is the modal body</template>
          <template #footer>This is the modal footer</template>
        </Modal>
      </div>
    `,
  }),
};
