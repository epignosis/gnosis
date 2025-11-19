import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    "@chromatic-com/storybook",
    "@storybook/addon-docs"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {},
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
  async viteFinal(config) {
    const { mergeConfig } = await import("vite");
    const svgr = (await import("vite-plugin-svgr")).default;

    // Remove any existing SVGR plugin from Storybook's default config
    config.plugins = config.plugins?.filter(
      (plugin) => plugin && plugin.name !== "vite:svgr"
    );

    return mergeConfig(config, {
      resolve: {
        alias: {
          "@theme": path.resolve(__dirname, "../src/theme"),
          "@test-utils": path.resolve(__dirname, "../src/test-utils"),
          type: path.resolve(__dirname, "../src/type"),
        },
      },
      plugins: [
        svgr({
          svgrOptions: {
            exportType: "default",
            ref: true,
            svgo: false,
            titleProp: true,
          },
          include: "**/*.svg",
        }),
      ],
    });
  },
};

export default config;
