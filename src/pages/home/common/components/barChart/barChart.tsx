import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

import "./barChart.scss";

export const BarChart = ({ width, height }) => {
	const barChartRef = useRef();

	useEffect(() => {
		barChartRef.current.innerHTML = "";
		barChartRef.current.appendChild(getBarChart(width, height));
	}, [width, height]);

	return <div ref={barChartRef}></div>;
};

export const getBarChart = (width, height) => {
	const data = [
		{ label: "A", value: 10 },
		{ label: "B", value: 5 },
		{ label: "C", value: 10 },
		{ label: "D", value: 20 },
		{ label: "E", value: 10 },
		{ label: "F", value: 5 },
		{ label: "G", value: 20 },
		{ label: "H", value: 7 },
		{ label: "I", value: 3 },
		{ label: "J", value: 10 },
	];

	const margin = { top: 20, right: 20, bottom: 30, left: 40 };
	const chartWidth = width - margin.left - margin.right;
	const chartHeight = height - margin.top - margin.bottom;

	const x = d3.scaleBand().rangeRound([0, chartWidth]).paddingInner(0.1);
	const y = d3.scaleLinear().rangeRound([chartHeight, 0]);
	const z = d3.scaleOrdinal().range(["#992600", "#004d00", "#003366"]);
	x.domain(
		data.map(function (d) {
			return d.label;
		})
	);
	y.domain([
		0,
		d3.max(data, function (d) {
			return d.value;
		}),
	]);

	const div = document.createElement("div");
	div.style.width = width + "px";
	div.style.height = height + "px";

	const svg = d3
		.select(div)
		.append("svg")
		.attr("width", width)
		.attr("height", height);
	const g = svg
		.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")")
		.attr("width", chartWidth)
		.attr("height", chartHeight);
	g.selectAll(".bar")
		.data(data)
		.enter()
		.append("rect")
		.attr("class", "bar")
		.attr("x", function (d) {
			return x(d.label);
		})
		.attr("width", x.bandwidth())
		.attr("y", function (d) {
			return y(d.value);
		})
		.attr("height", function (d) {
			return chartHeight - y(d.value);
		})
		.attr("fill", function (d) {
			return z(d.label);
		});

	g.append("g")
		.attr("transform", "translate(0," + chartHeight + ")")
		.call(d3.axisBottom(x));

	g.append("g").call(d3.axisLeft(y));

	return div;
};
