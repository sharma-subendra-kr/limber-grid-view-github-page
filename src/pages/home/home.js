import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getLoading, doSomething } from "./ducks";

const Home = (props) => {
  const { loading, doSomething } = props;

  useEffect(() => {
    setTimeout(() => {
      doSomething();
    }, 1000);
  }, []);

  return <div>LimberGridView 1.0.0 is finally here!</div>;
};

export default connect(
  (state) => ({
    loading: getLoading(state),
  }),
  {
    doSomething,
  }
)(Home);
