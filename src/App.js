import React from "react";
import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import requests from "./requests";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <List fetchUrl={requests.fetchUpcoming} />
          </Route>
          <Route exact path="/detail">
            <Header />
            <Detail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
