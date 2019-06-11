import styled from "styled-components";

const ChartContainer = styled.div`
	h2.contributions-header {
		margin-bottom: 0;
	}

	svg {
		max-width: 100%;
		width: 100%;
	}

	svg text {
		font-size: 12px;
	}

	.contributions {
		animation: fadein 1s ease-in-out;
	}

	.contributions svg {
		cursor: default;
	}

	.contributions rect:hover {
		opacity: .5;
	}

	.contributions .tooltip {
		animation: fadein .3s ease-in-out;
		font-size: 12px;
		border-radius: 2px;
		background: rgba(20,20,20,.9);
		padding: 4px 10px;
		color: #eee;
		position: fixed;
		transform: translateY(-100%) translateX(-50%);
	}

	.contributions .tooltip:after {
		top: 100%;
		left: 50%;
		border: solid transparent;
		content: " ";
		height: 0;
		width: 0;
		position: absolute;
		pointer-events: none;
		background: transparent;
		border-top-color: rgba(20,20,20,.9);
		border-width: 5px;
		margin-left: -5px;
	}

	@keyframes fadein {
		from { opacity: 0; }
		to   { opacity: 1; }
}
`;

export { ChartContainer };