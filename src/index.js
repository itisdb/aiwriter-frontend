
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.2.0";
import "assets/demo/demo.css";

import Index from "views/Index.js";
import ProfilePage from "views/examples/ProfilePage.js";
import Purchase from "views/purchase.js"
import AI from "views/ai.js"
import Contacts from "views/examples/Contacts.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/home" render={(props) => <Index {...props} />} />
      <Route
        path="/profile"
        render={(props) => <ProfilePage {...props} />}
      />
      <Route
        path="/ai"
        render={(props) => <AI {...props} />}
      />
      <Route
        path="/contact"
        render={(props) => <Contacts {...props} />}
      />
      <Route
        path="/purchase"
        render={(props) => <Purchase {...props} />}
      />
      <Redirect from="/" to="/home" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
