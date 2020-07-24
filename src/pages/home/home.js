import React, { useEffect } from "react";
import { connect } from "react-redux";

import Footer from "src/common/components/static/footer/footer";
import Header from "src/common/components/static/header/header";
import LgvTools from "src/common/components/complex/lgvTools/lgvTools";

import { getLoading, doSomething } from "./ducks";

import "./home.scss";

const Home = (props) => {
  const { loading, doSomething } = props;

  useEffect(() => {
    setTimeout(() => {
      doSomething();
    }, 1000);
  }, []);

  const onLatchChange = (latch) => {
    console.log("latch", latch);
  };

  const onDeskInteractionChange = (deskInteractionMode) => {};

  const onAddItem = () => {
    console.log("onAddItem");
  };

  return (
    <>
      <Header />
      <div className="page-home">
        <div className="tools-container">
          <div>
            <button className="button">Customized View</button>
            <button className="button">Default View</button>
          </div>
          <div className="lgv-tools-container">
            <LgvTools
              onLatchChange={onLatchChange}
              onDeskInteractionChange={onDeskInteractionChange}
              onAddItem={onAddItem}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default connect(
  (state) => ({
    loading: getLoading(state),
  }),
  {
    doSomething,
  }
)(Home);
