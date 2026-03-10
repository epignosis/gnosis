import { setup } from "@storybook/vue3";
import { createRoot } from "react-dom/client";
import { setVeauryOptions } from "veaury";

setVeauryOptions({ react: { createRoot } });

export const parameters = {
  controls: { expanded: true },
};