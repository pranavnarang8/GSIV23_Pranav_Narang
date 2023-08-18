import React from "react";
import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import requests from "./requests";

function App() {
  return (
    <div className="app">
      <Header />
      <List fetchUrl={requests.fetchUpcoming} />
    </div>
  );
}

export default App;
