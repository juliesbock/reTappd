import React from "react";
import ReactDOM from "react-dom";

// import { login, logout, signup } from './util/session_api_util'
import { login, logout, signup } from './actions/session_actions'
import { fetchBeers } from './actions/beer_actions'

import configureStore from "./store/store"
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
  let store;
  
  if (window.currentUser) {
    const preloadedState = {
      entities:{
        users: { [window.currentUser.id]: window.currentUser}
      },
      session: {id: window.currentUser.id}
    };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);

  /*/ TODO: REMOVE AFTER DEV /*/
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.fetchBeers = fetchBeers;
});