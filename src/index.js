import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import Search from "./components/search";
import Users from "./components/users";
import { Router } from "express";

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Search} />
      <Route path="/user:/username" component={Users} />
    </Route>
  </Router>
);
ReactDOM.render(routes, document.getElementById("root"));
