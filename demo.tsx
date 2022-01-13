import React from "react";
import { render } from "react-dom";
import { GithubContributions } from "./src";

render(
  <div>
    <h1>React Github Graph Demo Page</h1>
		<GithubContributions username="kylekarpack" />
  </div>,
  document.getElementById("home")
);