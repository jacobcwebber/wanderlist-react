import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import SignupPage from "./components/pages/SignupPage";
import DashboardPage from "./components/pages/DashboardPage";
import UserRoute from "./components/routes/UserRoute";
import GuestRoute from "./components/routes/GuestRoute";

const App = () => (
  <div className="ui container">
    <Switch>
      <Route path="/" exact component={HomePage} />
      <GuestRoute path="/login" exact component={LoginPage} />
      <GuestRoute path="/signup" exact component={SignupPage} />
      <UserRoute path="/dashboard" exact component={DashboardPage} />
    </Switch>
  </div>
);

export default App;
