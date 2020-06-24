import React from "react";
import { Link, HashRouter, Route, AuthRoute } from 'react-router-dom';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';



const App = () => (
  <div>
    <header>
      <h1>reTappd</h1>
      hello
      <Route path="/signup" component={SignupContainer} />
      <Route path="/login" component={LoginContainer} />
    </header>
  </div>
);

export default App;