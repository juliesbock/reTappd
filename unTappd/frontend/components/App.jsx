import React from "react";
import { Link, HashRouter } from 'react-router-dom';
import LoginContainer from './session/login_container';



const App = () => (
  <div>
    <header>
      <h1>reTappd BnB</h1>
      <AuthRoute path="/login" component={LoginContainer} />
    </header>
  </div>
);

export default App;