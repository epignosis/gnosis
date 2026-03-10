export const alertMeta = {
  title: "Components/Alert",
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["info", "danger", "success", "warning"],
      },
    },
    onClose: { action: "closed" },
  },
};

export const infoArgs = { type: "info" };
export const dangerArgs = { type: "danger" };
export const successArgs = { type: "success" };
export const warningArgs = { type: "warning" };
export const withCloseBtnArgs = { type: "info" };