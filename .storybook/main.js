const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@atoms": path.resolve(__dirname, "../src/atoms"),
      "@components": path.resolve(__dirname, "../src/components"),
      "@theme": path.resolve(__dirname, "../src/theme"),
      "@test-utils": path.resolve(__dirname, "../src/test-utils"),
      type: path.resolve(__dirname, "../src/type"),
    };

    config.resolve.extensions.push(".js", ".jsx", ".ts", ".tsx");

    return config;
  },
};
