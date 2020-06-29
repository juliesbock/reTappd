import React from "react";
import { Switch, Link, HashRouter, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute} from "../util/route_util"
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import SplashPage from './splash/splash_container'
import Header from './header/navbar'


const App = () => (
  <div>
      <Switch>
        <Route path="/home" component={Header} />
        <AuthRoute path="/signup" component={SignupContainer} />
        <AuthRoute path="/login" component={LoginContainer} />
        <Route path="/" component={SplashPage} />
      </Switch>
  </div>
);

export default App;
