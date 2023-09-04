import React, { useEffect, useState, useRef } from "react";

import { DropDown } from "src/common/components/widgets/dropdown/dropdown";
import { getTitle } from "src/pages/home/common/utils/utils";
import { Kpi } from "../kpi/kpi";
import { BarChart } from "../barChart/barChart";
import { PieChart } from "../pieChart/pieChart";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import "./layout.scss";

const Comps = [Kpi, BarChart, PieChart, PieChart];

export const Layout = (props) => {
	const { index, width, height, isAdd, onRemove, useIndexForTitle } = props;

	const [renderBody, setRenderBody] = useState(
		// isAdd ? -1 : Math.floor(Math.random() * 4)
		isAdd ? -1 : (index + 1) % 4
	);
	// const [random] = useState(Math.floor(Math.random() * 11));
	const [random] = useState((index + 1) % 11);

	const onSelectCb = (key) => {
		// const rand = Math.floor(Math.random() * 4);
		const rand = (index + 1) % 4;
		if (key === "add") {
			setRenderBody(rand);
		} else {
			onRemove(index);
		}
	};

	const Comp = Comps[renderBody];

	return (
		<div className="custom-layout">
			<div className="custom-layout-header">
				<DragIndicatorIcon />
				<p className="custom-layout-header-title">
					{useIndexForTitle ? index : getTitle(random)}
				</p>
				<div className="custom-layout-header-drop-down">
					<DropDown onSelectCb={onSelectCb} />
				</div>
			</div>
			<div className="custom-layout-body">
				{renderBody !== -1 ? <Comp width={width} height={height - 30} /> : ""}
			</div>
		</div>
	);
};
