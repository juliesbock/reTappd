import React from "react";
import { Link, HashRouter, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute} from "../util/route_util"
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import SplashPage from './splash'



const App = () => (
  <div>
    <header>
      <Route exact path="/" component={SplashPage} />
      <AuthRoute path="/signup" component={SignupContainer} />
      <AuthRoute path="/login" component={LoginContainer} />
    </header>
  </div>
);

export default App;