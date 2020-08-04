import React, { useEffect, useRef, Suspense } from "react";
import { connect } from "react-redux";

import Footer from "src/common/components/static/footer/footer";
import Header from "src/common/components/static/header/header";
import LgvTools from "src/common/components/complex/lgvTools/lgvTools";
// import LgvCustomizedView from "./common/components/lgvCustomizedView/lgvCustomizedView";
// import LgvDefaultView from "./common/components/lgvDefaultView/lgvDefaultView";

import {
  getView,
  changeViewAction,
  changeLatchAction,
  changeDeskInteractionModeAction,
  getPositionData,
  setPositionDataAction,
} from "./ducks";

import { pd } from "src/pages/home/common/static/lgvData";
import "./home.scss";

const LgvCustomizedView = React.lazy(() =>
  import("./common/components/lgvCustomizedView/lgvCustomizedView")
);
const LgvDefaultView = React.lazy(() =>
  import("./common/components/lgvDefaultView/lgvDefaultView")
);

const Home = (props) => {
  const {
    view,
    positionData,
    changeViewAction,
    changeLatchAction,
    changeDeskInteractionModeAction,
    setPositionDataAction,
  } = props;

  const lgvCustomizedView = useRef();
  const lgvDefaultView = useRef();

  useEffect(() => {
    setPositionDataAction([]);
    setPositionDataAction(pd);
    // setTimeout(() => {
    //   setPositionDataAction(pd);
    // }, 1000);
  }, []);

  const onLatchChange = (latch) => {
    changeLatchAction(latch);
  };

  const onDeskInteractionChange = (deskInteractionMode) => {
    changeDeskInteractionModeAction(deskInteractionMode);
  };

  const onAddItem = () => {
    if (view === "customized") {
      lgvCustomizedView.current.addItem();
    } else {
      lgvDefaultView.current.addItem();
    }
  };

  const onClickCustomizedView = () => {
    changeViewAction("customized");
  };

  const onClickDefaultViewView = () => {
    changeViewAction("default");
  };

  return (
    <>
      <Header />
      <div className="page-home">
        <div className="tools-container">
          <div>
            <button className="button" onClick={onClickCustomizedView}>
              Customized View
            </button>
            <button className="button" onClick={onClickDefaultViewView}>
              Default View
            </button>
          </div>
          <div className="lgv-tools-container">
            <LgvTools
              onLatchChange={onLatchChange}
              onDeskInteractionChange={onDeskInteractionChange}
              onAddItem={onAddItem}
            />
          </div>
        </div>
        <Suspense fallback={<div>loading...</div>}>
          {positionData && (
            <div className="lgv-container">
              {view === "customized" ? (
                <LgvCustomizedView ref={lgvCustomizedView} />
              ) : (
                <LgvCustomizedView ref={lgvDefaultView} />
              )}
            </div>
          )}
        </Suspense>
      </div>
      <Footer />
    </>
  );
};

export default connect(
  (state) => ({
    view: getView(state),
    positionData: getPositionData(state),
  }),
  {
    changeViewAction,
    changeLatchAction,
    changeDeskInteractionModeAction,
    setPositionDataAction,
  }
)(Home);
