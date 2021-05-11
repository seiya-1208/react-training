import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { TopPage } from "./pages/top"
import { UserShowPage } from "./pages/users"
import { UserIndexPage } from "./pages/users"

const app = document.getElementById('app');

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Route exact path="/" component={TopPage}></Route>
      <Route exact path="/users" component={UserIndexPage}></Route>
      <Route exact path="/users/:userId" component={UserShowPage}></Route>

    </React.StrictMode>
  </BrowserRouter>,
  app
);