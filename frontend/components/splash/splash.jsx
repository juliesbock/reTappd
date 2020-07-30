import React from "react";
import { Link } from "react-router-dom";
import LoginFormContainer from "../session/login_container";

class Splash extends React.Component {

  render() {
    return (
      <>
        <div splash-main-wrapper>
          <div className="main-background">
            <section className="splash-main">
              <div className="login-signup-header">
                <div></div>
                <div className="splash-header-right">
                <Link to="/login" className="splash-btn">Sign In</Link> <br />
                <Link to="/signup" className="splash-btn">Create an Account</Link>
                </div>
              </div>
              <div className='splash'>
                <div className='splash-div'>
                  <div className="logo">
                    {/* <img src="https://cdn.iconscout.com/icon/free/png-256/beer-69-129873.png" alt="Beer Icon" width="50"></img> */}
                    {/* <img src="https://untappd.akamaized.net/assets/custom/homepage/images/ut-logo-bottles.svg" alt=""/> */}
                    <i className="fab fa-untappd"></i>

                    <h1 className='splash-logo'>Retappd</h1>
                    <h3 className="subheader">Drink Socially</h3>
                  </div>              
                <div className='short-bar'></div>
                <h2 className='logo-message'>Discover and share your favorite beer.</h2>
              </div>

              <div className='splash-div'>
                <img className='splash-picture'
                  src="https://untappd.akamaized.net/assets/custom/homepage/images/masthead-img-main.png"
                  alt="Phone-picture" />
              </div>
            </div>
              <div className='spacing'></div>
            </section>
          </div>
          
        </div>


        {/* 
        
        <section className='feature'>
            <div className='feature-box'>
            <div className='feature-content'>

              <div className='img-div'><img src={window.featureImg1} alt="check-in" /></div>
        <h4 className='feature-title'>check in and rate beer</h4>
        <div className='feature-body'>Keep track of what you've tried and what you thought of it by checking in a beer and rating it.</div>
      </div>
      <div className='feature-content'>
        <div className='img-div'><img src={window.featureImg2} alt="badges" /></div>
        <h4 className='feature-title'>drink new beers, unlock badges</h4>
        <div className='feature-body'>Expand your palate by trying new and different beer styles and unlock achievements along the way.</div>
      </div>
          </div >
        </section >
        
        
        
        
        <footer>
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



