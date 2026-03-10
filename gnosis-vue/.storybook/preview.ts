import { createRoot } from "react-dom/client";
import { setVeauryOptions } from "veaury";

setVeauryOptions({ react: { createRoot } });

export const parameters = {
  controls: { expanded: true },
};
