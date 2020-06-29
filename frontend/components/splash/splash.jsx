import React from "react";
import { Link } from "react-router-dom";
import LoginFormContainer from "../session/login_container";

class Splash extends React.Component {

  render() {
    return (
      <>
        <div className="main-background">
          <div className="splash-main">
            <div className="login-signup-upper">
              <div className="splash-left"></div>
                <div className="splash-right">
                <Link to="/login" className="splash-btn">Sign In</Link> <br />
                <Link to="/signup" className="splash-btn">Create an Account</Link>
              </div>
            </div>
            {/* will put rest of splash page contents */}
          </div>
        </div>

        {/* <footer>
          <div id="footer-nav">
            <div className="nav-items">
              <button className="future-content" >Home</button>
              <button className="future-content" >The Pub</button>
              <button className="future-content" >Store</button>
              <button className="future-content" >Breweries</button>
              <button className="future-content" >Blog</button>
              <button className="future-content" >Support</button>
              <button className="future-content" >Careers</button>
              <button className="future-content" >API</button>
              <button className="future-content" >Terms</button>
              <button className="future-content" >Privacy</button>
            </div>
            <p>© Retappd, Inc. 2020</p>
          </div>
        </footer> */}
      </>
    )
  }
}

export default Splash;



