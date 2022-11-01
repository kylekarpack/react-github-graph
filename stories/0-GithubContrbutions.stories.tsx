import { Story } from "@storybook/react";
import React from "react";
import GithubContributions from "../src/GithubContributions";

export default {
  title: "GithubContributions",
  component: GithubContributions,
};

export const GithubGraph: Story<{ username: string }> = (args) => (
  <GithubContributions {...args} />
);
GithubGraph.args = { username: "kylekarpack" };
