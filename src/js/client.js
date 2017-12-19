import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Layout from "./pages/Layout";

const app = document.getElementById('app');

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Layout />
    </Switch>
  </BrowserRouter>,
app);
