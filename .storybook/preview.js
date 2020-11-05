import { addParameters } from "@storybook/client-api";

addParameters({
	viewMode: "docs",
});

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	viewMode: "docs",
};
