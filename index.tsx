import React from "react";
import { render } from "react-dom";
import { GithubContributions } from "./src";

import { GithubContributions as Ghc } from "./dist/index.es";

render(
  <div>
    <h1>React Github Graph Demo Page</h1>
		<GithubContributions username="kylekarpack" />
    <Ghc username="kylekarpack" />
  </div>,
  document.getElementById("home")
);