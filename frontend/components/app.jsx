import React from "react";
import { Switch, Link, HashRouter, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute} from "../util/route_util"
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import SplashPage from './splash_container'
// import HomeHeader from './home_page'




const App = () => (
  <div>
    <div className="main-background">
      <Switch>
        <AuthRoute path="/signup" component={SignupContainer} />
        <AuthRoute path="/login" component={LoginContainer} />
        {/* <Route path="/home" component={HomeHeader} /> */}
        <Route path="/" component={SplashPage} />
      </Switch>
    </div>
  </div>
);

export default App;

// {/* <Route exact path="/" component={SplashPage} /> */}

//       <AuthRoute exact path="/" component={SplashContainer} />
//       <ProtectedRoute path="/" component={MainContent} />
//     <Switch>
//     </Switch>