import React, { useEffect } from "react";
import { connect } from "react-redux";

import Footer from "src/common/components/static/footer/footer";
import Header from "src/common/components/static/header/header";

import { getLoading, doSomething } from "./ducks";

import "./home.scss";

const Home = (props) => {
  const { loading, doSomething } = props;

  useEffect(() => {
    setTimeout(() => {
      doSomething();
    }, 1000);
  }, []);

  return (
    <>
      <Header />
      <div className="page-home">
        <div className="switch-lgv-view-container">
          <button className="button">Customized View</button>
          <button className="button">Default View</button>
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
