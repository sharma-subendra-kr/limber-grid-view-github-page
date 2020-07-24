import React, { useEffect } from "react";
import { connect } from "react-redux";

import Footer from "src/common/components/static/footer/footer";
import Header from "src/common/components/static/header/header";
import LgvTools from "src/common/components/complex/lgvTools/lgvTools";
import LgvCustomizedView from "src/common/components/widgets/LgvCustomizedView/LgvCustomizedView";
import LgvDefaultView from "src/common/components/widgets/LgvDefaultView/LgvDefaultView";

import { getView, changeLgvViewAction } from "./ducks";

import "./home.scss";

const Home = (props) => {
  const { view, changeLgvViewAction } = props;

  useEffect(() => {
    // setTimeout(() => {
    //   changeLgvViewAction("default");
    // }, 1000);
  }, []);

  const onLatchChange = (latch) => {
    console.log("latch", latch);
  };

  const onDeskInteractionChange = (deskInteractionMode) => {};

  const onAddItem = () => {
    console.log("onAddItem");
  };

  const onClickCustomizedView = () => {
    changeLgvViewAction("customized");
  };

  const onClickDefaultViewView = () => {
    changeLgvViewAction("default");
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
    changeLgvViewAction,
  }
)(Home);
