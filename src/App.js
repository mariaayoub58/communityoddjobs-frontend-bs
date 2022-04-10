import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component, Container } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Search from "./pages/Search";
import CreateUser from "./pages/CreateUser";
import Notifications from "./pages/Notifications";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/Search" component={Search} />
          <Route path="/CreateUser" component={CreateUser} />
          <Route path="/Notifications" component={Notifications} />
          <Route path="*" render={() => <Redirect to="/" />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
