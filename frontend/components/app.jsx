import React from "react";
import { Switch, Link, HashRouter, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute} from "../util/route_util"
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import SplashPage from './splash/splash_container'
import Header from './header/navbar_container'
import BeerShow from './beers/beers_container'


const App = () => (
  <div>
    {/* {currentUser ? <Header/> : 'not logged in'} */}
      <Switch>
        <Route path="/home" component={Header} />
        <Route path="/beers/:beerId" component={BeerShow} />
        <AuthRoute path="/signup" component={SignupContainer} />
        <AuthRoute path="/login" component={LoginContainer} />
        <Route path="/" component={SplashPage} />
      </Switch>
  </div>
);

export default App;