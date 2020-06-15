import React, { Component } from "react";
import "./App.css";
import "./index.css";
import "./fonts.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home";
import Login from "./login";
import Quiz from "./quiz";
import Classroom from "./classroom";


function App() {
  return (
    <Router>
      <div className="main">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/classroom" component={Classroom}></Route>
          <Route exact path="/quiz" component={Quiz}></Route>


        </Switch>
      </div>
    </Router>
  );
}

export default App;
