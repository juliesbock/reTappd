import React from "react";
import ReactDOM from "react-dom";
import { login, logout, signup } from './util/session_api_util'


document.addEventListener("DOMContentLoaded", () => {

  // TODO: REMOVE AFTER DEVELOPMENT
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to reTappd</h1>, root);
});