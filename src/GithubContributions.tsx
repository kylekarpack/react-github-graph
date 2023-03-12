import React, { FunctionComponent, useEffect, useState } from "react";
import { Loader } from "./Loader";
import "./container.scss";

const GithubContributions: FunctionComponent<{
  username: string;
  renderHeader?: (header: string) => React.ReactNode;
}> = ({ username, renderHeader }) => {
  const [state, setState] = useState({
    loaded: false,
    error: false,
    chart: "",
    header: "",
  });

  const [tooltip, setTooltip] = useState({
    position: null,
    data: null,
  });

  const handleMouseOver = (e: any) => {
    if (e?.target?.matches("rect")) {
      const rect = e.target.getBoundingClientRect();
      setTooltip({
        data: e.target.dataset,
        position: {
          left: rect.x + rect.width / 2,
          top: rect.y - 4,
        },
      });
    }
  };

  const handleMouseOut = () => {
    setTooltip(null);
  };

  const init = async () => {
    try {
      const contributions = await fetch(
        `https://cors.kylekarpack.workers.dev/corsproxy/?apiurl=https://github.com/users/${username}/contributions`,
        { mode: "cors" }
      );

      let responseText = await contributions.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(responseText, "text/html");
      const graph = doc.body.querySelector(
        ".calendar-graph, .js-calendar-graph"
      );

      // Remove some extraneous content
      graph.querySelector(".f6")?.remove();
      graph.querySelector(".width-full > .float-right")?.remove();

      const svg = graph.querySelector("svg");
      svg.setAttribute(
        "viewBox",
        `0 0 ${svg.getAttribute("width") || "828"} ${
          svg.getAttribute("height") || "128"
        }`
      );

      setState({
        ...state,
        loaded: true,
        header: doc.body.querySelector(".f4").innerHTML,
        chart: graph.innerHTML,
      });
    } catch (e) {
      setState({ ...state, error: true, loaded: true });
      console.warn("Error retrieving graph: ", e);
    }
  };

  // Clear tooltips on scrolling
  useEffect(() => {
    typeof window !== "undefined" &&
      window.addEventListener("scroll", handleMouseOut);

    return () => {
      typeof window !== "undefined" &&
        window.removeEventListener("scroll", handleMouseOut);
    };
  }, []);

  // Initialize on load
  useEffect(() => {
    init();
  }, [username]);

  if (!state.loaded) {
    return <Loader />;
  }

  return (
    <div className="react-github-graph-contributions">
      {state.error ? (
        <div>Sorry, we couldn't load these contributions right now</div>
      ) : (
        ""
      )}

      {renderHeader ? (
        <>{renderHeader(state.header)}</>
      ) : (
        <h2 className="contributions-header">{state.header}</h2>
      )}
      <div
        className="contributions-chart"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        dangerouslySetInnerHTML={{ __html: state.chart }}></div>
      {tooltip && tooltip.data ? (
        <div className="tooltip" style={tooltip.position}>
          <strong>Date:</strong> {tooltip.data.date} <br />
          <strong>Contributions:</strong> {tooltip.data.count}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default GithubContributions;
