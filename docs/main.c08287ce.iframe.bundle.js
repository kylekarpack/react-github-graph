(self.webpackChunkreact_github_graph=self.webpackChunkreact_github_graph||[]).push([[179],{"./stories/0-GithubContrbutions.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{GithubGraph:()=>GithubGraph,__namedExportsOrder:()=>__namedExportsOrder,default:()=>_0_GithubContrbutions_stories});__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js");var react=__webpack_require__("./node_modules/react/index.js");const ChartContainer=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.div`
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
`;try{ChartContainer.displayName="ChartContainer",ChartContainer.__docgenInfo={description:"",displayName:"ChartContainer",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ChartContainer.tsx#ChartContainer"]={docgenInfo:ChartContainer.__docgenInfo,name:"ChartContainer",path:"src/ChartContainer.tsx#ChartContainer"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Loader=()=>(0,jsx_runtime.jsx)("div",{style:{textAlign:"center",margin:"4em auto"},children:(0,jsx_runtime.jsxs)("svg",{width:"40",height:"40",viewBox:"0 0 105 105",xmlns:"http://www.w3.org/2000/svg",fill:"#777",children:[(0,jsx_runtime.jsx)("circle",{cx:"12.5",cy:"12.5",r:"12.5",children:(0,jsx_runtime.jsx)("animate",{attributeName:"fill-opacity",begin:"0s",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})}),(0,jsx_runtime.jsx)("circle",{cx:"12.5",cy:"52.5",r:"12.5",fillOpacity:".5",children:(0,jsx_runtime.jsx)("animate",{attributeName:"fill-opacity",begin:"100ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})}),(0,jsx_runtime.jsx)("circle",{cx:"52.5",cy:"12.5",r:"12.5",children:(0,jsx_runtime.jsx)("animate",{attributeName:"fill-opacity",begin:"300ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})}),(0,jsx_runtime.jsx)("circle",{cx:"52.5",cy:"52.5",r:"12.5",children:(0,jsx_runtime.jsx)("animate",{attributeName:"fill-opacity",begin:"600ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})}),(0,jsx_runtime.jsx)("circle",{cx:"92.5",cy:"12.5",r:"12.5",children:(0,jsx_runtime.jsx)("animate",{attributeName:"fill-opacity",begin:"800ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})}),(0,jsx_runtime.jsx)("circle",{cx:"92.5",cy:"52.5",r:"12.5",children:(0,jsx_runtime.jsx)("animate",{attributeName:"fill-opacity",begin:"400ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})}),(0,jsx_runtime.jsx)("circle",{cx:"12.5",cy:"92.5",r:"12.5",children:(0,jsx_runtime.jsx)("animate",{attributeName:"fill-opacity",begin:"700ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})}),(0,jsx_runtime.jsx)("circle",{cx:"52.5",cy:"92.5",r:"12.5",children:(0,jsx_runtime.jsx)("animate",{attributeName:"fill-opacity",begin:"500ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})}),(0,jsx_runtime.jsx)("circle",{cx:"92.5",cy:"92.5",r:"12.5",children:(0,jsx_runtime.jsx)("animate",{attributeName:"fill-opacity",begin:"200ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})})]})});Loader.displayName="Loader";try{Loader.displayName="Loader",Loader.__docgenInfo={description:"",displayName:"Loader",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Loader.tsx#Loader"]={docgenInfo:Loader.__docgenInfo,name:"Loader",path:"src/Loader.tsx#Loader"})}catch(__react_docgen_typescript_loader_error){}const GithubContributions=({username})=>{const[state,setState]=(0,react.useState)({loaded:!1,error:!1,chart:"",header:""}),[tooltip,setTooltip]=(0,react.useState)({position:null,data:null}),handleMouseOut=()=>{setTooltip(null)};return(0,react.useEffect)((()=>("undefined"!=typeof window&&window.addEventListener("scroll",handleMouseOut),()=>{"undefined"!=typeof window&&window.removeEventListener("scroll",handleMouseOut)})),[]),(0,react.useEffect)((()=>{(async()=>{try{const contributions=await fetch(`https://cors.kylekarpack.workers.dev/corsproxy/?apiurl=https://github.com/users/${username}/contributions`,{mode:"cors"});let responseText=await contributions.text();const doc=(new DOMParser).parseFromString(responseText,"text/html"),graph=doc.body.querySelector(".calendar-graph, .js-calendar-graph");graph.querySelector(".f6")?.remove(),graph.querySelector(".width-full > .float-right")?.remove();const svg=graph.querySelector("svg");svg.setAttribute("viewBox",`0 0 ${svg.getAttribute("width")||"828"} ${svg.getAttribute("height")||"128"}`),setState({...state,loaded:!0,header:doc.body.querySelector(".f4").innerHTML,chart:graph.innerHTML})}catch(e){setState({...state,error:!0,loaded:!0}),console.warn("Error retrieving graph: ",e)}})()}),[username]),state.loaded?(0,jsx_runtime.jsx)(ChartContainer,{children:(0,jsx_runtime.jsxs)("div",{className:"contributions",children:[state.error?(0,jsx_runtime.jsx)("div",{children:"Sorry, we couldn't load these contributions right now"}):"",(0,jsx_runtime.jsx)("h2",{className:"contributions-header",children:state.header}),(0,jsx_runtime.jsx)("div",{className:"contributions-chart",onMouseOver:e=>{if(e?.target?.matches("rect")){const rect=e.target.getBoundingClientRect();setTooltip({data:e.target.dataset,position:{left:rect.x+rect.width/2,top:rect.y-4}})}},onMouseOut:handleMouseOut,dangerouslySetInnerHTML:{__html:state.chart}}),tooltip&&tooltip.data?(0,jsx_runtime.jsxs)("div",{className:"tooltip",style:tooltip.position,children:[(0,jsx_runtime.jsx)("strong",{children:"Date:"})," ",tooltip.data.date," ",(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("strong",{children:"Contributions:"})," ",tooltip.data.count]}):""]})}):(0,jsx_runtime.jsx)(Loader,{})};GithubContributions.displayName="GithubContributions";const src_GithubContributions=GithubContributions;try{GithubContributions.displayName="GithubContributions",GithubContributions.__docgenInfo={description:"",displayName:"GithubContributions",props:{username:{defaultValue:null,description:"",name:"username",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/GithubContributions.tsx#GithubContributions"]={docgenInfo:GithubContributions.__docgenInfo,name:"GithubContributions",path:"src/GithubContributions.tsx#GithubContributions"})}catch(__react_docgen_typescript_loader_error){}const _0_GithubContrbutions_stories={title:"GithubContributions",component:src_GithubContributions,argTypes:{username:{name:"Github User Name",control:{type:"text"}}}},GithubGraph=args=>(0,jsx_runtime.jsx)(src_GithubContributions,{...args});GithubGraph.displayName="GithubGraph",GithubGraph.args={username:"kylekarpack"};const __namedExportsOrder=["GithubGraph"]},"./storybook-init-framework-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"./stories sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(ts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./0-GithubContrbutions.stories.tsx":"./stories/0-GithubContrbutions.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./stories sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(ts%7Ctsx))$"},"?4f7e":()=>{},"./generated-stories-entry.cjs":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./stories sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(ts%7Ctsx))$")],module,!1)}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[999],(()=>(__webpack_exec__("./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.cjs"))));__webpack_require__.O()}]);