import React from "react";
import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import requests from "./requests";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./components/Detail";
import { useSelector } from "react-redux";
import { selectMovie } from "./features/movieSlice";

function App() {
  const movie = useSelector(selectMovie);
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <List
              fetchUpcoming={requests.fetchUpcoming}
              fetchSearch={requests.fetchSearch}
            />
          </Route>
          <Route exact path="/detail">
            {movie ? <Header backArrowIcon /> : <Header />}
            {movie ? (
              <Detail />
            ) : (
              <List
                fetchUpcoming={requests.fetchUpcoming}
                fetchSearch={requests.fetchSearch}
              />
            )}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
