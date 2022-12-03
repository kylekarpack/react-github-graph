const config = {
  stories: ["../stories/**/*.stories.{ts,tsx}"],
  addons: ["@storybook/addon-controls"],
  typescript: {
    check: false,
    checkOptions: {},
  },
  core: {
    builder: "webpack5",
  },
};

export default config;
