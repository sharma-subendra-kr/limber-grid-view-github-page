import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import LimberGridView from "LimberGridView";

import {
  getView,
  getLatch,
  getDeskInteractionMode,
  getPositionData,
} from "../../../ducks";

import "./lgvCustomizedView.scss";

const LgvCustomizedView = (props) => {
  const { view, latch, deskInteractionMode, positionData } = props;

  const lgv = useRef(null);
  const el = useRef(null);

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
      positionData: positionData,
      // positionData: [
      //   {
      //     x: 430,
      //     y: 630,
      //     width: 200,
      //     height: 250,
      //   },
      // ],
    });
  }, []);

  useEffect(() => {
    lgv.current.setLatchMovedItem(latch);
  }, [latch]);

  useEffect(() => {
    lgv.current.setDeskInteractMode(deskInteractionMode);
  }, [deskInteractionMode]);

  const renderContent = () => {
    return "Arsenal";
  };

  const renderComplete = () => {};

  const resizeComplete = () => {};

  const moveComplete = () => {};

  const addComplete = () => {};

  const removeComplete = () => {};

  return <div className="lgv-customized-view-container" ref={el}></div>;
};

export default connect(
  (state) => ({
    view: getView(state),
    latch: getLatch(state),
    deskInteractionMode: getDeskInteractionMode(state),
    positionData: getPositionData(state),
  }),
  {}
)(LgvCustomizedView);
