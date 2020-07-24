import React from "react";
import { Router, Switch, Redirect } from "react-router-dom";

import { customHistory } from "../config";
import { PrivateRoute } from "../../common/components/routes/PrivateRoute";
import { PublicRoute } from "../../common/components/routes/PublicRoute";

import Home from "../../pages/home/home";

const Routes = () => {
  return (
    <Router history={customHistory}>
      <Switch>
        <PublicRoute path="/home" component={Home} redirectPath="/home" />
        <Redirect to="/home" />
      </Switch>
    </Router>
  );
};

export default Routes;
