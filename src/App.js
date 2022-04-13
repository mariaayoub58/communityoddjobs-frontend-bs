import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component, Container } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Search from "./pages/Search";
import CreateUser from "./pages/CreateUser";
import CreateJob from "./pages/CreateJob";
import Notifications from "./pages/Notifications";
import EditJob from "./pages/EditJob";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          backgroundImage: `url("https://unsplash.com/photos/__ZMnefoI3k")`,
        }}
      >
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/Search" component={Search} />
          <Route path="/CreateUser" component={CreateUser} />
          <Route path="/CreateJob" component={CreateJob} />
          <Route path="/Notifications" component={Notifications} />
          <Route path="/EditJob" component={EditJob} />
          <Route path="*" render={() => <Redirect to="/" />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
