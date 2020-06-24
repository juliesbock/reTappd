import React from "react";
import ReactDOM from "react-dom";

// import { login, logout, signup } from './util/session_api_util'
import { login, logout, signup } from './actions/session_actions'

import configureStore from "./store/store"

document.addEventListener("DOMContentLoaded", () => {

  const store = configureStore();

  /*/ TODO: REMOVE AFTER DEV /*/
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to reTappd</h1>, root);
});