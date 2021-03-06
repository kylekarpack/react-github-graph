import styled from "styled-components";

const ChartContainer = styled.div`
	h2.contributions-header {
		margin-bottom: 0;
	}

	.ContributionCalendar.days-selected .ContributionCalendar-day {
		opacity: 0.5;
	}

	.ContributionCalendar.days-selected .ContributionCalendar-day.active {
		opacity: 1;
	}

	.ContributionCalendar-label {
		font-size: 9px;
		fill: var(--color-text-primary);
	}

	.ContributionCalendar-day,
	.ContributionCalendar-day[data-level="0"] {
		fill: var(--color-calendar-graph-day-bg);
		shape-rendering: geometricPrecision;
		outline: 1px solid var(--color-calendar-graph-day-border);
		outline-offset: -1px;
	}

	.ContributionCalendar-day[data-level="1"] {
		fill: var(--color-calendar-graph-day-L1-bg);
		outline: 1px solid var(--color-calendar-graph-day-L1-border);
	}

	.ContributionCalendar-day[data-level="2"] {
		fill: var(--color-calendar-graph-day-L2-bg);
		outline: 1px solid var(--color-calendar-graph-day-L2-border);
	}

	.ContributionCalendar-day[data-level="3"] {
		fill: var(--color-calendar-graph-day-L3-bg);
		outline: 1px solid var(--color-calendar-graph-day-L3-border);
	}

	.ContributionCalendar-day[data-level="4"] {
		fill: var(--color-calendar-graph-day-L4-bg);
		outline: 1px solid var(--color-calendar-graph-day-L4-border);
	}

	.ContributionCalendar[data-holiday="halloween"]
		.ContributionCalendar-day[data-level="1"] {
		fill: var(--color-calendar-halloween-graph-day-L1-bg);
	}

	.ContributionCalendar[data-holiday="halloween"]
		.ContributionCalendar-day[data-level="2"] {
		fill: var(--color-calendar-halloween-graph-day-L2-bg);
	}

	.ContributionCalendar[data-holiday="halloween"]
		.ContributionCalendar-day[data-level="3"] {
		fill: var(--color-calendar-halloween-graph-day-L3-bg);
	}

	.ContributionCalendar[data-holiday="halloween"]
		.ContributionCalendar-day[data-level="4"] {
		fill: var(--color-calendar-halloween-graph-day-L4-bg);
	}

	.contributions {
		--color-calendar-graph-day-bg: #ebedf0;
		--color-calendar-graph-day-border: rgba(27, 31, 35, 0.06);
		--color-calendar-graph-day-L1-bg: #9be9a8;
		--color-calendar-graph-day-L2-bg: #40c463;
		--color-calendar-graph-day-L3-bg: #30a14e;
		--color-calendar-graph-day-L4-bg: #216e39;
		--color-calendar-graph-day-L4-border: rgba(27, 31, 35, 0.06);
		--color-calendar-graph-day-L3-border: rgba(27, 31, 35, 0.06);
		--color-calendar-graph-day-L2-border: rgba(27, 31, 35, 0.06);
		--color-calendar-graph-day-L1-border: rgba(27, 31, 35, 0.06);
		animation: fadein 1s ease-in-out;
		svg {
			cursor: default;
			max-width: 100%;
			width: 100%;
			text {
				font-size: 12px;
			}
		}
		rect:hover {
			opacity: 0.5;
		}
		.tooltip {
			animation: fadein 0.3s ease-in-out;
			font-size: 12px;
			border-radius: 2px;
			background: rgba(20, 20, 20, 0.9);
			padding: 4px 10px;
			color: #eee;
			position: fixed;
			transform: translateY(-100%) translateX(-50%);
			&:after {
				top: 100%;
				left: 50%;
				border: solid transparent;
				content: " ";
				height: 0;
				width: 0;
				position: absolute;
				pointer-events: none;
				background: transparent;
				border-top-color: rgba(20, 20, 20, 0.9);
				border-width: 5px;
				margin-left: -5px;
			}
		}
	}

	@keyframes fadein {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;

export { ChartContainer };
