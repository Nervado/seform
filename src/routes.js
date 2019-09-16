import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import UserForm from "./pages/Form";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/form" component={UserForm} />
      </Switch>
    </BrowserRouter>
  );
}
