import React from "react";
import { Switch, Link, HashRouter, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute} from "../util/route_util"
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import SplashPage from './splash/splash_container';
import Header from './header/navbar_container';
import BeerShow from './beers/beers_container';
import BeersIndex from './beers/beers_index_container';


const App = () => (
  <div className="body">
      <Switch>
      <ProtectedRoute path="/home" component={BeersIndex} />
        {/* <Route exact path="/beers" component={BeersIndex} /> */}
      <ProtectedRoute path="/beers/:beerId" component={BeerShow} />
      <AuthRoute path="/signup" component={SignupContainer} />
      <AuthRoute path="/login" component={LoginContainer} />
      <Route path="/" component={SplashPage} />
      </Switch>
  </div>
);

export default App;