import React from "react";
import { Switch, Link, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute} from "../util/route_util"
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import SplashPage from './splash/splash_container';
import Header from './header/navbar_container';
import BeerShow from './beers/beers_container';
import BeersIndex from './beers/beers_index_container';
import BreweryShow from './breweries/brewery_show'
import BreweryIndex from './breweries/brewery_index'
// import CheckinIndex from './checkins/checkin_index'
// <Route path="/checkins" component={CheckinIndex}/> //

const App = () => (
  <div className="body">
    <Switch>
      <ProtectedRoute exact path="/breweries" component={BreweryIndex} />
      <ProtectedRoute path="/breweries/:breweryId" component={BreweryShow} />
      <ProtectedRoute path="/home" component={BeersIndex} />
      <ProtectedRoute path="/beers/:beerId" component={BeerShow} />
      <AuthRoute path="/signup" component={SignupContainer} />
      <AuthRoute path="/login" component={LoginContainer} />
      <AuthRoute path="/" component={SplashPage} />
    </Switch>
  </div>
);

export default App;