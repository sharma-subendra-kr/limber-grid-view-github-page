import React, { useEffect, useRef } from "react";

import "./kpi.scss";

export const Kpi = ({ width, height }) => {
	const kpiRef = useRef();

	useEffect(() => {
		kpiRef.current.innerHTML = "";
		kpiRef.current.appendChild(getKpi(width, height));
	}, [width, height]);

	return <div ref={kpiRef}></div>;
};

export const getKpi = (width, height) => {
	const rand = Math.random();
	let stockUpDown;
	if (rand > 0.5) {
		stockUpDown = "stock-up";
	} else {
		stockUpDown = "stock-down";
	}

	const div = document.createElement("div");
	div.style.width = width + "px";
	div.style.height = height + "px";
	div.classList.add("kpi");

	const divLeft = document.createElement("div");
	divLeft.style.width = width * 0.25 + "px";
	divLeft.style.height = height + "px";
	divLeft.classList.add("kpi-left");

	const divLeftArrow = document.createElement("div");
	divLeftArrow.classList.add(stockUpDown);

	divLeft.appendChild(divLeftArrow);
	div.appendChild(divLeft);

	const divRight = document.createElement("div");
	divRight.style.width = width * 0.75 + "px";
	divRight.style.height = height + "px";
	divRight.classList.add("kpi-right");

	const divRightTop = document.createElement("div");
	divRightTop.style.width = width * 0.75 + "px";
	divRightTop.style.height = height / 2 + "px";
	divRightTop.classList.add("kpi-right-top");
	divRightTop.innerHTML = "FAKESTOK";

	const divRightBottom = document.createElement("div");
	divRightBottom.style.width = width * 0.75 + "px";
	divRightBottom.style.height = height / 2 + "px";
	divRightBottom.classList.add("kpi-right-bottom");
	divRightBottom.innerHTML = rand.toFixed(2);

	divRight.appendChild(divRightTop);
	divRight.appendChild(divRightBottom);
	div.appendChild(divRight);

	return div;
};
