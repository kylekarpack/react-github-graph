const config = {
  stories: ["../stories/**/*.stories.{ts,tsx}"],
  addons: ["@storybook/addon-controls"],
  features: {
    babelModeV7: true,
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  core: {
    builder: "webpack5",
  },
};

export default config;
