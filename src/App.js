import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";

const App = () => (
  <div className="ui container">
    <Switch className="ui container">
      <Route path="/" exact component={HomePage} />
      <Route path="/login" exact component={LoginPage} />
    </Switch>
  </div>
);

export default App;
