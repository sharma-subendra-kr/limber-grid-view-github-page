import React, { useEffect, useState, useRef } from "react";
import * as d3 from "d3";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
	BarChart as ReBarChart,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Bar,
	Cell,
} from "recharts";
import styled from "styled-components";

import "./barChart.scss";

// const DATA = [
// 	{ label: "GO", value: 10, fill: "#8884d8" },
// 	{ label: "OG", value: 5, fill: "#82ca9d" },
// 	{ label: "L", value: 10, fill: "#83a6ed" },
// 	{ label: "NA", value: 20, fill: "#8dd1e1" },
// 	{ label: "SD", value: 10, fill: "#a4de6c" },
// 	{ label: "AQ", value: 5, fill: "#d0ed57" },
// 	{ label: "AA", value: 20, fill: "#ffc658" },
// 	{ label: "PL", value: 7, fill: "#8884d8" },
// 	{ label: "MS", value: 3, fill: "#82ca9d" },
// 	{ label: "FT", value: 10, fill: "#83a6ed" },
// ];

const DATA = [
	{ label: "GO", value: 10, fill: "#115293" },
	{ label: "OG", value: 5, fill: "#9a0036" },
	{ label: "L", value: 10, fill: "#d32f2f" },
	{ label: "NA", value: 20, fill: "#f57c00" },
	{ label: "SD", value: 10, fill: "#1976d2" },
	{ label: "AQ", value: 5, fill: "#388e3c" },
	{ label: "AA", value: 20, fill: "#115293" },
	{ label: "PL", value: 7, fill: "#9a0036" },
	{ label: "MS", value: 3, fill: "#d32f2f" },
	{ label: "FT", value: 10, fill: "#f57c00" },
];

// const DATA = [
// 	{ label: "GO", value: 10, fill: "#1976d2" },
// 	{ label: "OG", value: 5, fill: "#dc004e" },
// 	{ label: "L", value: 10, fill: "#f44336" },
// 	{ label: "NA", value: 20, fill: "#ff9800" },
// 	{ label: "SD", value: 10, fill: "#2196f3" },
// 	{ label: "AQ", value: 5, fill: "#4caf50" },
// 	{ label: "AA", value: 20, fill: "#1976d2" },
// 	{ label: "PL", value: 7, fill: "#dc004e" },
// 	{ label: "MS", value: 3, fill: "#f44336" },
// 	{ label: "FT", value: 10, fill: "#ff9800" },
// ];

// const DATA = [
// 	{ label: "GO", value: 10, fill: "#4791db" },
// 	{ label: "OG", value: 5, fill: "#e33371" },
// 	{ label: "L", value: 10, fill: "#e57373" },
// 	{ label: "NA", value: 20, fill: "#ffb74d" },
// 	{ label: "SD", value: 10, fill: "#64b5f6" },
// 	{ label: "AQ", value: 5, fill: "#81c784" },
// 	{ label: "AA", value: 20, fill: "#4791db" },
// 	{ label: "PL", value: 7, fill: "#e33371" },
// 	{ label: "MS", value: 3, fill: "#e57373" },
// 	{ label: "FT", value: 10, fill: "#ffb74d" },
// ];

const BarChart = ({ width, height, className }) => {
	const [data, setData] = useState(undefined);
	const barChartRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			const _data = [...DATA];
			setData(_data);
		}, 1000);
	}, []);

	return (
		<div className={className} ref={barChartRef}>
			{data && getBarChart(width, height, data)}
			{!data && <CircularProgress color="primary" size={30} />}
		</div>
	);
};

export const getBarChart = (width, height, data) => {
	return (
		<ReBarChart
			width={width}
			height={height}
			data={data}
			margin={{ top: 5, right: 15, bottom: -5, left: -30 }}
		>
			<CartesianGrid strokeDasharray="3 3" />
			<XAxis dataKey="label" />
			<YAxis />
			<Tooltip formatter={(value) => [value]} />
			<Bar dataKey="value">
				{data.map((item, index) => {
					return <Cell key={index} fill={item.fill} />;
				})}
			</Bar>
		</ReBarChart>
	);
};

const StyledBarChart = styled(BarChart)`
	display: flex;
	height: 100%;
	justify-content: center;
	align-items: center;
	.recharts-cartesian-axis-ticks {
	}
	.recharts-cartesian-axis-tick-value {
		> tspan {
			font-size: 9px;
			font-weight: bold;
			// fill: #000000;
		}
	}
	.MuiCircularProgress-colorPrimary {
		color: #2196f3;
	}
`;

export { StyledBarChart as BarChart };

// export const getBarChart = (width, height) => {
// 	const data = [
// 		{ label: "A", value: 10 },
// 		{ label: "B", value: 5 },
// 		{ label: "C", value: 10 },
// 		{ label: "D", value: 20 },
// 		{ label: "E", value: 10 },
// 		{ label: "F", value: 5 },
// 		{ label: "G", value: 20 },
// 		{ label: "H", value: 7 },
// 		{ label: "I", value: 3 },
// 		{ label: "J", value: 10 },
// 	];

// 	const margin = { top: 20, right: 20, bottom: 30, left: 40 };
// 	const chartWidth = width - margin.left - margin.right;
// 	const chartHeight = height - margin.top - margin.bottom;

// 	const x = d3.scaleBand().rangeRound([0, chartWidth]).paddingInner(0.1);
// 	const y = d3.scaleLinear().rangeRound([chartHeight, 0]);
// 	const z = d3.scaleOrdinal().range(["#992600", "#004d00", "#003366"]);
// 	x.domain(
// 		data.map(function (d) {
// 			return d.label;
// 		})
// 	);
// 	y.domain([
// 		0,
// 		d3.max(data, function (d) {
// 			return d.value;
// 		}),
// 	]);

// 	const div = document.createElement("div");
// 	div.style.width = width + "px";
// 	div.style.height = height + "px";

// 	const svg = d3
// 		.select(div)
// 		.append("svg")
// 		.attr("width", width)
// 		.attr("height", height);
// 	const g = svg
// 		.append("g")
// 		.attr("transform", "translate(" + margin.left + "," + margin.top + ")")
// 		.attr("width", chartWidth)
// 		.attr("height", chartHeight);
// 	g.selectAll(".bar")
// 		.data(data)
// 		.enter()
// 		.append("rect")
// 		.attr("class", "bar")
// 		.attr("x", function (d) {
// 			return x(d.label);
// 		})
// 		.attr("width", x.bandwidth())
// 		.attr("y", function (d) {
// 			return y(d.value);
// 		})
// 		.attr("height", function (d) {
// 			return chartHeight - y(d.value);
// 		})
// 		.attr("fill", function (d) {
// 			return z(d.label);
// 		});

// 	g.append("g")
// 		.attr("transform", "translate(0," + chartHeight + ")")
// 		.call(d3.axisBottom(x));

// 	g.append("g").call(d3.axisLeft(y));

// 	return div;
// };

// const colours = [
// 	"#1769aa",
// 	"#2196f3",
// 	"#4dabf5",
// 	"#ab003c",
// 	"#f50057",
// 	"#f73378",
// 	"#b2a429",
// 	"#ffeb3b",
// 	"#ffef62",
// 	"#52b202",
// 	"#76ff03",
// 	"#91ff35",
// 	"#b26500",
// 	"#ff9100",
// 	"#ffa733",
// 	"#14a37f",
// 	"#1de9b6",
// 	"#4aedc4",
// 	"#8ab200",
// 	"#c6ff00",
// 	"#d1ff33",
// 	"#6d1b7b",
// 	"#9c27b0",
// 	"#af52bf",
// 	"#482880",
// 	"#673ab7",
// 	"#8561c5",
// 	"#b28704",
// 	"#ffc107",
// 	"#ffcd38",
// 	"#00695f",
// 	"#009688",
// 	"#33ab9f",
// 	"#618833",
// 	"#8bc34a",
// 	"#a2cf6e",
// ];

// const coloursLen = colours.length;
