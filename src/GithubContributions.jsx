import React from "react";
import { ChartContainer } from "./ChartContainer";
import { Loader } from "./Loader";

class GithubContributions extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
			error: false,
			chart: "",
			header: "",
			tooltip: {
				position: null,
			},
		};
		this.init();
	}

	componentDidMount() {
		typeof window !== "undefined" &&
			window.addEventListener("scroll", this.handleMouseOut);
	}

	componentWillUnmount() {
		typeof window !== "undefined" &&
			window.removeEventListener("scroll", this.handleMouseOut);
	}

	handleMouseOver = (e) => {
		if (e.target && e.target.matches && e.target.matches("rect")) {
			const rect = e.target.getBoundingClientRect();
			this.setState({
				tooltip: {
					data: e.target.dataset,
					position: {
						left: rect.x + rect.width / 2,
						top: rect.y - 4,
					},
				},
			});
		}
	};

	handleMouseOut = (e) => {
		this.setState({ tooltip: null });
	};

	async init() {
		let responseText;

		try {
			const contributions = await fetch(
				`https://cors.kylekarpack.workers.dev/corsproxy/?apiurl=https://github.com/users/${this.props.username}/contributions`,
				{ mode: "cors" }
			);

			responseText = await contributions.text();
			const parser = new DOMParser();
			const doc = parser.parseFromString(responseText, "text/html");
			const graph = doc.body.querySelector(".calendar-graph, .js-calendar-graph");
			const svg = graph.querySelector("svg");
			graph.querySelector(".f6").remove();

			svg.setAttribute(
				"viewBox",
				`0 0 ${svg.getAttribute("width") || "828"} ${
					svg.getAttribute("height") || "128"
				}`
			);

			this.setState({
				loaded: true,
				header: doc.body.querySelector(".f4").innerHTML,
				chart: graph.innerHTML,
			});
		} catch (e) {
			this.setState({ error: true, loaded: true });
			console.warn("Error retrieving graph: ", e);
		}
	}

	render() {
		return this.state.loaded ? (
			<ChartContainer>
				<div className="contributions">
					{this.state.error ? (
						<div>Sorry, we couldn't load these contributions right now</div>
					) : (
						""
					)}
					<h2 className="contributions-header">{this.state.header}</h2>
					<div
						className="contributions-chart"
						onMouseOver={this.handleMouseOver}
						onMouseOut={this.handleMouseOut}
						dangerouslySetInnerHTML={{ __html: this.state.chart }}></div>
					{this.state.tooltip && this.state.tooltip.data ? (
						<div className="tooltip" style={this.state.tooltip.position}>
							<strong>Date:</strong> {this.state.tooltip.data.date} <br />
							<strong>Contributions:</strong> {this.state.tooltip.data.count}
						</div>
					) : (
						""
					)}
				</div>
			</ChartContainer>
		) : (
			<Loader />
		);
	}
}

export default GithubContributions;
