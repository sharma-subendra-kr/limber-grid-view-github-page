import React, { useEffect, useRef, useState } from "react";

import { DropDown } from "src/common/components/widgets/dropdown/dropdown";
import { getRandomTitle } from "src/pages/home/common/utils/utils";
import { Kpi } from "../kpi/kpi";
import { BarChart } from "../barChart/barChart";
import { PieChart } from "../pieChart/pieChart";
import "./layout.scss";

const Comps = [Kpi, BarChart, PieChart];

export const Layout = (props) => {
  const { index, width, height, isAdd, onRemove } = props;

  const [renderBody, setRenderBody] = useState(!isAdd);

  const rand = Math.floor(Math.random() * 2);

  const Comp = Comps[rand];

  const onSelectCb = (key) => {
    if (key === "add") {
      setRenderBody(true);
    } else {
      onRemove(index);
    }
  };

  return (
    <div className="default-layout">
      <div className="default-layout-header">
        <p className="default-layout-header-title">{getRandomTitle()}</p>
        <div className="default-layout-header-drop-down">
          <DropDown onSelectCb={onSelectCb} />
        </div>
      </div>
      <div className="default-layout-body">
        {renderBody ? <Comp width={width} height={height - 30} /> : ""}
      </div>
    </div>
  );
};
