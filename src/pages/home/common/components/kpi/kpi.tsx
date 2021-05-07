import React, { useEffect, useRef, useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
} from "recharts";
import styled from "styled-components";

import "./kpi.scss";

const DATA = [
	{
		name: "GO",
		uv: 40,
		pv: 24,
		amt: 24,
	},
	{
		name: "OG",
		uv: 30,
		pv: 13,
		amt: 22,
	},
	{
		name: "NA",
		uv: 20,
		pv: 98,
		amt: 22,
	},
	{
		name: "SD",
		uv: 27,
		pv: 39,
		amt: 20,
	},
	{
		name: "AQ",
		uv: 18,
		pv: 48,
		amt: 21,
	},
	{
		name: "AA",
		uv: 23,
		pv: 38,
		amt: 25,
	},
	{
		name: "PL",
		uv: 34,
		pv: 43,
		amt: 21,
	},
];

const Kpi = ({ width, height, className }) => {
	const [data, setData] = useState(undefined);
	const kpiRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			const _data = [...DATA];
			setData(_data);
		}, 1000);
	}, []);

	return (
		<div className={className} ref={kpiRef}>
			{data && getKpi(width, height, data)}
			{!data && <CircularProgress color="primary" size={30} />}
		</div>
	);
};

export const getKpi = (width, height, data) => {
	return (
		<LineChart
			width={width}
			height={height}
			data={data}
			margin={{
				top: 5,
				right: 15,
				left: -30,
				bottom: -5,
			}}
		>
			<CartesianGrid strokeDasharray="3 3" />
			<XAxis dataKey="name" />
			<YAxis />
			<Tooltip />
			<Line
				type="monotone"
				dataKey="pv"
				stroke="#8884d8"
				activeDot={{ r: 8 }}
			/>
			<Line type="monotone" dataKey="uv" stroke="#82ca9d" />
		</LineChart>
	);
};

const StyledKpi = styled(Kpi)`
	display: flex;
	height: 100%;
	justify-content: center;
	align-items: center;

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

export { StyledKpi as Kpi };

// export const getKpi = (width, height) => {
// 	const rand = Math.random();
// 	let stockUpDown;
// 	if (rand > 0.5) {
// 		stockUpDown = "stock-up";
// 	} else {
// 		stockUpDown = "stock-down";
// 	}

// 	const div = document.createElement("div");
// 	div.style.width = width + "px";
// 	div.style.height = height + "px";
// 	div.classList.add("kpi");

// 	const divLeft = document.createElement("div");
// 	divLeft.style.width = width * 0.25 + "px";
// 	divLeft.style.height = height + "px";
// 	divLeft.classList.add("kpi-left");

// 	const divLeftArrow = document.createElement("div");
// 	divLeftArrow.classList.add(stockUpDown);

// 	divLeft.appendChild(divLeftArrow);
// 	div.appendChild(divLeft);

// 	const divRight = document.createElement("div");
// 	divRight.style.width = width * 0.75 + "px";
// 	divRight.style.height = height + "px";
// 	divRight.classList.add("kpi-right");

// 	const divRightTop = document.createElement("div");
// 	divRightTop.style.width = width * 0.75 + "px";
// 	divRightTop.style.height = height / 2 + "px";
// 	divRightTop.classList.add("kpi-right-top");
// 	divRightTop.innerHTML = "FAKESTOK";

// 	const divRightBottom = document.createElement("div");
// 	divRightBottom.style.width = width * 0.75 + "px";
// 	divRightBottom.style.height = height / 2 + "px";
// 	divRightBottom.classList.add("kpi-right-bottom");
// 	divRightBottom.innerHTML = rand.toFixed(2);

// 	divRight.appendChild(divRightTop);
// 	divRight.appendChild(divRightBottom);
// 	div.appendChild(divRight);

// 	return div;
// };
