import React from "react";
import { Link } from "react-router-dom";
import LoginFormContainer from "../components/session/login_container";

class Splash extends React.Component {

  render() {
    return (
      <div className="splash-main">
        <div className="login-signup-upper">
          <Link to="/login" className="splash-btn">Sign In</Link> <br/>
          <Link to="/signup" className="splash-btn">Create an Account</Link>
        </div>
        {/* <LoginFormContainer /> */}
      </div>
    )
  }
}

export default Splash;