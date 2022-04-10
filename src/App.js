import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component, Container } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Search from "./pages/Search";
import CreateUser from "./pages/CreateUser";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Footer />
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/Search" component={Search} />
          <Route path="/CreateUser" component={CreateUser} />
          <Route path="*" render={() => <Redirect to="/" />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
