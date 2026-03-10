import type { StorybookConfig } from "@storybook/vue3-vite";
import veauryVitePlugins from "veaury/vite/index.js";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-a11y", "@storybook/addon-docs"],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  docs: {},
  async viteFinal(config) {
    const { mergeConfig } = await import("vite");
    return mergeConfig(config, {
      plugins: [veauryVitePlugins({ type: "vue" })],
    });
  },
};

export default config;
