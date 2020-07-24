import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";

import LimberGridView from "LimberGridView";

const LgvDefaultView = (props) => {
  const lgv = useRef(null);

  useEffect(() => {}, []);

  return <div className="lgv-default-view-container"></div>;
};

export default LgvDefaultView;
