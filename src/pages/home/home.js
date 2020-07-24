import React, { useEffect } from "react";
import { connect } from "react-redux";

import Footer from "src/common/components/static/footer/footer";
import Header from "src/common/components/static/header/header";
import LgvTools from "src/common/components/complex/lgvTools/lgvTools";
import LgvCustomizedView from "./common/components/lgvCustomizedView/lgvCustomizedView";
import LgvDefaultView from "./common/components/lgvDefaultView/lgvDefaultView";

import {
  getView,
  changeViewAction,
  changeLatchAction,
  changeDeskInteractionModeAction,
} from "./ducks";

import "./home.scss";

const Home = (props) => {
  const {
    view,
    changeViewAction,
    changeLatchAction,
    changeDeskInteractionModeAction,
  } = props;

  useEffect(() => {
    // setTimeout(() => {
    //   changeViewAction("default");
    // }, 1000);
  }, []);

  const onLatchChange = (latch) => {
    changeLatchAction(latch);
  };

  const onDeskInteractionChange = (deskInteractionMode) => {
    changeDeskInteractionModeAction(deskInteractionMode);
  };

  const onAddItem = () => {
    console.log("onAddItem");
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
        <div className="lgv-container">
          {view === "customized" ? <LgvCustomizedView /> : <LgvDefaultView />}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default connect(
  (state) => ({
    view: getView(state),
  }),
  {
    changeViewAction,
    changeLatchAction,
    changeDeskInteractionModeAction,
  }
)(Home);
