# react-github-graph

![React Github Graph Sample](https://raw.githubusercontent.com/kylekarpack/react-github-graph/master/public/wide.png "Example usage")

## Purpose

React Github Graph is a lightweight React component that displays Github contributions for a given user. 

## Installation
```
npm install react-github-graph --save
```

or

```
yarn add react-github-graph
```

## Usage

```jsx
import React from "react";
import { GithubContributions } from "react-github-graph"

export default function Page() {
	//...
	return <GithubContributions username="{your username here}"></GithubContributions>
}

```

## Notes
Currently depends on the following resources:
- https://cors-anywhere.herokuapp.com
- https://github.com

If one of these resources is unavailable, the component will not be able to load and will hide itself
