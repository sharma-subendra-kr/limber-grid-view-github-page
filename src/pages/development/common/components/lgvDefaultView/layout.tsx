import React, { useEffect, useRef, useState } from "react";

import { DropDown } from "src/common/components/widgets/dropdown/dropdown";
import { getTitle } from "src/pages/home/common/utils/utils";
import { Kpi } from "../kpi/kpi";
import { BarChart } from "../barChart/barChart";
import { PieChart } from "../pieChart/pieChart";
import "./layout.scss";

const Comps = [Kpi, BarChart, PieChart, PieChart];

export const Layout = (props) => {
	const { index, width, height, isAdd, onRemove } = props;

	const [renderBody, setRenderBody] = useState(
		isAdd ? -1 : Math.floor(Math.random() * 4)
	);
	const [random] = useState(Math.floor(Math.random() * 11));

	const onSelectCb = (key) => {
		const rand = Math.floor(Math.random() * 4);
		if (key === "add") {
			setRenderBody(rand);
		} else {
			onRemove(index);
		}
	};

	const Comp = Comps[renderBody];

	return (
		<div className="default-layout">
			<div className="default-layout-header">
				<p className="default-layout-header-title">{getTitle(random)}</p>
				<div className="default-layout-header-drop-down">
					<DropDown onSelectCb={onSelectCb} />
				</div>
			</div>
			<div className="default-layout-body">
				{renderBody != -1 ? <Comp width={width} height={height - 30} /> : ""}
			</div>
		</div>
	);
};
