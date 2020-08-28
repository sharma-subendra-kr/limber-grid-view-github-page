import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

import "./pieChart.scss";

export const PieChart = ({ width, height }) => {
  const pieChartRef = useRef();

  useEffect(() => {
    pieChartRef.current.innerHTML = "";
    pieChartRef.current.appendChild(getPieChart(width, height));
  }, [width, height]);

  return <div ref={pieChartRef}></div>;
};

export const getPieChart = (width, height) => {
  const data = [10, 20, 100];

  const margin = { top: 20, right: 20, bottom: 30, left: 40 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  const radius = Math.min(chartWidth, chartHeight) / 2;

  const color = d3.scaleOrdinal().range(["#ff6600", "#ffbf00", "#009933"]);

  const arc = d3
    .arc()
    .outerRadius(radius - 10)
    .innerRadius(0);

  const labelArc = d3
    .arc()
    .outerRadius(radius - 40)
    .innerRadius(radius - 40);

  const pie = d3
    .pie()
    .sort(null)
    .value(function (d) {
      return d;
    });

  const div = document.createElement("div");
  div.style.width = width + "px";
  div.style.height = height + "px";

  const svg = d3
    .select(div)
    .append("svg")
    .attr("width", width)
    .attr("height", height);
  const gForMargin = svg
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    .attr("width", chartWidth)
    .attr("height", chartHeight);
  const g = gForMargin
    .append("g")
    .attr(
      "transform",
      "translate(" + chartWidth / 2 + "," + chartHeight / 2 + ")"
    );
  const g2 = g
    .selectAll(".arc")
    .data(pie(data))
    .enter()
    .append("g")
    .attr("class", "arc");
  g2.append("path")
    .attr("d", arc)
    .style("fill", function (d) {
      return color(d.data);
    });

  // g2.append("text")
  //  .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
  //  .attr("dy", ".35em")
  //  .text(function(d) { return d.data; })
  // ;

  return div;
};
