import React, { useEffect, useRef, useState } from "react";
// import * as d3 from "d3";
import CircularProgress from "@material-ui/core/CircularProgress";
import { PieChart as RePieChart, Pie, Cell, Tooltip } from "recharts";
import styled from "styled-components";

import "./pieChart.scss";

const DATA = [
	{ name: "Group A", value: 400, fill: "#0088FE" },
	{ name: "Group B", value: 300, fill: "#00C49F" },
	{ name: "Group C", value: 300, fill: "#FFBB28" },
	{ name: "Group D", value: 200, fill: "#FF8042" },
];

const PieChart = ({ width, height, className }) => {
	const [data, setData] = useState(undefined);
	const pieChartRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			const _data = [...DATA];
			setData(_data);
		}, 1000);
	}, []);

	return (
		<div className={className} ref={pieChartRef}>
			{data && getPieChart(width, height, data)}
			{!data && <CircularProgress color="primary" size={30} />}
		</div>
	);
};

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
	cx,
	cy,
	midAngle,
	innerRadius,
	outerRadius,
	percent,
	index,
}) => {
	const radius = outerRadius + 2;
	const x = cx + radius * Math.cos(-midAngle * RADIAN);
	const y = cy + radius * Math.sin(-midAngle * RADIAN);

	return (
		<text
			x={x}
			y={y}
			fill="white"
			textAnchor={x > cx ? "start" : "end"}
			dominantBaseline="central"
		>
			{`${(percent * 100).toFixed(0)}%`}
		</text>
	);
};

export const getPieChart = (width, height, data) => {
	const r = width < height ? width / 2 : height / 2;
	return (
		<RePieChart width={width} height={height}>
			<Tooltip formatter={(value) => [value]} />
			<Pie
				data={data}
				cx="50%"
				cy="50%"
				labelLine={false}
				label={renderCustomizedLabel}
				outerRadius={r - 15}
				innerRadius={r - 35}
				fill="#8884d8"
				dataKey="value"
			>
				{data.map((entry, index) => (
					<Cell key={`cell-${index}`} fill={entry.fill} />
				))}
			</Pie>
		</RePieChart>
	);
};

const StyledPieChart = styled(PieChart)`
	display: flex;
	height: 100%;
	justify-content: center;
	align-items: center;
	.recharts-pie-labels {
		text {
			font-size: 10px;
			font-weight: bold;
			fill: #151d2d;
		}
	}
	.MuiCircularProgress-colorPrimary {
		color: #2196f3;
	}
`;

export { StyledPieChart as PieChart };

// export const getPieChart = (width, height) => {
// 	const data = [10, 20, 100];

// 	const margin = { top: 20, right: 20, bottom: 30, left: 40 };
// 	const chartWidth = width - margin.left - margin.right;
// 	const chartHeight = height - margin.top - margin.bottom;

// 	const radius = Math.min(chartWidth, chartHeight) / 2;

// 	const color = d3.scaleOrdinal().range(["#ff6600", "#ffbf00", "#009933"]);

// 	const arc = d3
// 		.arc()
// 		.outerRadius(radius - 10)
// 		.innerRadius(0);

// 	const labelArc = d3
// 		.arc()
// 		.outerRadius(radius - 40)
// 		.innerRadius(radius - 40);

// 	const pie = d3
// 		.pie()
// 		.sort(null)
// 		.value(function (d) {
// 			return d;
// 		});

// 	const div = document.createElement("div");
// 	div.style.width = width + "px";
// 	div.style.height = height + "px";

// 	const svg = d3
// 		.select(div)
// 		.append("svg")
// 		.attr("width", width)
// 		.attr("height", height);
// 	const gForMargin = svg
// 		.append("g")
// 		.attr("transform", "translate(" + margin.left + "," + margin.top + ")")
// 		.attr("width", chartWidth)
// 		.attr("height", chartHeight);
// 	const g = gForMargin
// 		.append("g")
// 		.attr(
// 			"transform",
// 			"translate(" + chartWidth / 2 + "," + chartHeight / 2 + ")"
// 		);
// 	const g2 = g
// 		.selectAll(".arc")
// 		.data(pie(data))
// 		.enter()
// 		.append("g")
// 		.attr("class", "arc");
// 	g2.append("path")
// 		.attr("d", arc)
// 		.style("fill", function (d) {
// 			return color(d.data);
// 		});

// 	// g2.append("text")
// 	//  .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
// 	//  .attr("dy", ".35em")
// 	//  .text(function(d) { return d.data; })
// 	// ;

// 	return div;
// };
