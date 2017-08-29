import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import injectTapEventPlugin from "react-tap-event-plugin";

//import Chat from "/imports/components/chat";
import Main from "/imports/components/main";
import Login from "/imports/components/login";

// import Authenticated from "/imports/api/users/client/authentication";

export const Routes = appProps =>
  <div>
    <BrowserRouter>
        <Switch>
          <Route exact name="index" path="/" component={Main} {...appProps} />
          <Route exact path="/Login" component={Login} {...appProps} />
        </Switch>
    </BrowserRouter>
  </div>;
