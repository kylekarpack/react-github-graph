# react-github-graph

![React Github Graph Sample](https://raw.githubusercontent.com/kylekarpack/react-github-graph/main/demo.png "Example usage")

## Purpose

React Github Graph is a lightweight React component that displays Github contributions for a given user. 

## Installation
```
npm install react-github-graph
```

or

```
yarn add react-github-graph
```

## Usage

```jsx
import React from "react";
import { GithubContributions } from "react-github-graph"

export default function App() {
  return (
    <GithubContributions username="{your username here}" />
  );
}
```

## Notes
Currently depends on the following resources:
- https://cors.kylekarpack.workers.dev
- https://github.com

If one of these resources is unavailable, the component will not be able to load and will hide itself
