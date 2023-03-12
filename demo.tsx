import React from "react";
import { createRoot } from "react-dom/client";
import GithubContributions from "./src/GithubContributions";

const container = document.getElementById("home");
const root = createRoot(container!);

root.render(
  <div>
    <h1>React Github Graph Demo Page</h1>
    <GithubContributions
      username="kylekarpack"
      renderHeader={(header) => <span>{header}</span>}
    />
  </div>
);
