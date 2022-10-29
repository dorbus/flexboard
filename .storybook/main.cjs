module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(m?js)$/,
      type: "javascript/auto",
      resolve: {
        fullySpecified: false,
      },
    });
    return config;
  },
};
