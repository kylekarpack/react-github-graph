import React from "react";
import GithubContributions from "../GithubContributions";

export default {
	title: "GithubContributions",
	component: GithubContributions
};

export const Story = (args) => (
	<GithubContributions {...args} />
);
Story.args = { username: "kylekarpack" }
