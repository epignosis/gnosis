const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-rtl",
    "@storybook/addon-a11y",
  ],
  webpackFinal: (config) => {
    // Rules
    const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test(".svg"));
    fileLoaderRule.exclude = /\.svg$/;

    config.module.rules.push({
      test: /\.svg$/,
      enforce: "pre",
      loader: require.resolve("@svgr/webpack"),
    });

    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto",
    });

    // Path alliases
    config.resolve.alias = {
      ...config.resolve.alias,
      "@theme": path.resolve(__dirname, "../src/theme"),
      "@test-utils": path.resolve(__dirname, "../src/test-utils"),
      type: path.resolve(__dirname, "../src/type"),
    };

    config.resolve.extensions.push(".js", ".jsx", ".ts", ".tsx");

    return config;
  },
};
