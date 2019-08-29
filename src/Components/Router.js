import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Header from "./Header";
import Movie from "Routes/Movie";
import TV from "Routes/TV";
import Search from "Routes/Search";

export default () => (
  <Router>
    <Header></Header>
    <Switch>
      <Route path="/" exact component={Movie}></Route>
      <Route path="/tv" component={TV}></Route>
      <Route path="/search" component={Search}></Route>
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
