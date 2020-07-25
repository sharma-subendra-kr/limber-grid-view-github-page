import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";
import { connect } from "react-redux";
import LimberGridView from "LimberGridView";

import {
  getView,
  getLatch,
  getDeskInteractionMode,
  getPositionData,
  setPositionDataAction,
} from "../../../ducks";

import "./lgvDefaultView.scss";

const LgvDefaultView = forwardRef((props, ref) => {
  const {
    view,
    latch,
    deskInteractionMode,
    positionData,
    setPositionDataAction,
  } = props;
  console.log("pd default", positionData);
  const lgv = useRef(null);
  const el = useRef(null);

  useImperativeHandle(ref, () => ({
    addItem: () => {
      lgv.current.addItem();
    },
  }));

  useEffect(() => {
    console.log("mount", positionData);
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
    });
    return function () {
      console.log("unmount default view");
      setPositionDataAction(lgv.current.getGridData().positionData);
    };
  }, []);

  useEffect(() => {
    lgv.current.setLatchMovedItem(latch);
  }, [latch]);

  useEffect(() => {
    lgv.current.setDeskInteractMode(deskInteractionMode);
  }, [deskInteractionMode]);

  const renderContent = (index, width, height, type) => {
    return <div>Arsenal</div>;
  };

  const renderComplete = (index) => {};

  const resizeComplete = (index, width, height, arrangedIndices) => {
    setPositionDataAction(lgv.current.getGridData().positionData);
  };

  const moveComplete = (index, toX, toY, arrangedIndices) => {
    setPositionDataAction(lgv.current.getGridData().positionData);
  };

  const addComplete = (index) => {
    setPositionDataAction(lgv.current.getGridData().positionData);
  };

  const removeComplete = (index) => {
    setPositionDataAction(lgv.current.getGridData().positionData);
  };

  const renderPlugin = (renderData, element) => {
    ReactDOM.render(renderData, element);
  };

  return <div className="lgv-default-view-container" ref={el}></div>;
});

export default connect(
  (state) => ({
    view: getView(state),
    latch: getLatch(state),
    deskInteractionMode: getDeskInteractionMode(state),
    positionData: getPositionData(state),
  }),
  { setPositionDataAction },
  null,
  { forwardRef: true }
)(LgvDefaultView);
