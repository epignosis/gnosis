export const toastMeta = {
  title: "Components/Toast Notifications",
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["info", "success", "warning", "error"],
      },
    },
    onClose: { action: "closed" },
  },
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const infoArgs = { type: "info", content: "This is an informational message" };
export const successArgs = { type: "success", content: "Operation completed successfully!" };
export const warningArgs = { type: "warning", content: "Please be careful with this action" };
export const errorArgs = { type: "error", content: "An error occurred while processing your request" };
