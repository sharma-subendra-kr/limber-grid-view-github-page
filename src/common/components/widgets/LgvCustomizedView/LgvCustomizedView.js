import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";

import LimberGridView from "LimberGridView";

import "./LgvCustomizedView.scss";

const LgvCustomizedView = (props) => {
  const lgv = useRef(null);
  const el = useRef(null);

  const renderContent = () => {
    return "Arsenal";
  };

  const renderComplete = () => {};

  const resizeComplete = () => {};

  const moveComplete = () => {};

  const addComplete = () => {};

  const removeComplete = () => {};

  useEffect(() => {
    lgv.current = new LimberGridView({
      el: el.current,
      editable: true,
      gridData: {},
      callbacks: {
        renderContent: renderContent,
        renderComplete: renderComplete,
        resizeComplete: resizeComplete,
        moveComplete: moveComplete,
        addComplete: addComplete,
        removeComplete: removeComplete,
      },
      positionData: [
        {
          x: 430,
          y: 630,
          width: 200,
          height: 250,
        },
      ],
    });
    console.log("lgv.current", lgv.current);
  }, []);

  return <div className="lgv-customized-view-container" ref={el}></div>;
};

export default LgvCustomizedView;
