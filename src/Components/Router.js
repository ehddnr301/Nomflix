import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Header from "./Header";
import Movie from "Routes/Movie";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Detail from "Routes/Detail";

export default () => (
  <Router>
    <Header></Header>
    <Switch>
      <Route path="/" exact component={Movie}></Route>
      <Route path="/tv" component={TV}></Route>
      <Route path="/search" component={Search}></Route>
      <Route path="/movie/:id" component={Detail} />
      <Route path="/show/:id" component={Detail} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
