const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: (config) => {
    // Rules
    const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test(".svg"));
    fileLoaderRule.exclude = /\.svg$/;

    config.module.rules.push({
      test: /\.svg$/,
      enforce: "pre",
      loader: require.resolve("@svgr/webpack"),
    });

    // Path alliases
    config.resolve.alias = {
      ...config.resolve.alias,
      "@components": path.resolve(__dirname, "../src/components"),
      "@theme": path.resolve(__dirname, "../src/theme"),
      "@test-utils": path.resolve(__dirname, "../src/test-utils"),
      "@icons": path.resolve(__dirname, "../src/icons"),
      type: path.resolve(__dirname, "../src/type"),
    };

    config.resolve.extensions.push(".js", ".jsx", ".ts", ".tsx");

    return config;
  },
};
