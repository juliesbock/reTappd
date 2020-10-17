import React from "react";
import { Link } from "react-router-dom";
import LoginFormContainer from "../session/login_container";

class Splash extends React.Component {

  render() {
    return (
      <>
        <div splash-main-wrapper>
          <div className="splash-background">
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
          <div className='feature-bar' ></div>
          <section className='feature'>
            <div className='feature-box'>
              <div className='feature-content'>

                <div className='img-div'><img src="https://untappd.akamaized.net/assets/custom/homepage/images/ratings.png" alt="check-in" /></div>
                <h4 className='feature-title'>check in and rate beer</h4>
                <div className='feature-body'>Keep track of what you’ve tried and what you thought of it by checking in a beer and rating it.</div>
              </div>
              <div className='feature-content'>
                <div className='img-div'><img src="https://untappd.akamaized.net/assets/custom/homepage/images/badges.png" alt="badges" /></div>
                <h4 className='feature-title'>drink new beers, unlock badges</h4>
                <div className='feature-body'>Expand your palate by trying new & different beer styles and unlock achievements along the way.</div>
              </div>
            </div>
          </section>
          <section className='map-feature'>
            <div className='map-feature-img'>
              <img src="https://untappd.akamaized.net/assets/custom/homepage/images/phone-map.png" alt="" />
            </div>
            <div className='map-feature-text'>
              <h1 className='map-feature-heading'>Explore nearby popular bars, breweries, and beers</h1>
              <div className='map-short-bar'></div>
              <p className='map-feature-body'>Not sure where to grab a pint? Retappd shows you popular bars and venues nearby and what’s on tap.</p>
            </div>
          </section>
          <section className='other-features'>
            <h1 className='other-title'>Other Great Features</h1>
            <div className='short-bar'></div>
            <div className='other-features-box'>
              <div className='other-features-items'>
                <img src="https://untappd.akamaized.net/assets/custom/homepage/images/icon-menu.svg" alt="" />
                <h2 className='other-item-title'>Updated Menus</h2>
                <div className='other-item-body'>Follow Verified Venues to get live tap list updates.</div>
              </div>
              <div className='other-features-items'>
                <img src="https://untappd.akamaized.net/assets/custom/homepage/images/icon-recommendations.svg" alt="" />
                <h2 className='other-item-title'>Recommendations</h2>
                <div className='other-item-body'>Discover new beers locally we think you'll like.</div>
              </div>
              <div className='other-features-items'>
                <img src="https://untappd.akamaized.net/assets/custom/homepage/images/icon-events.svg" alt="" />
                <h2 className='other-item-title'>Local Events</h2>
                <div className='other-item-body'>Stay up-to-date with local breweries event alerts.</div>
              </div>
            </div>
          </section>
          <div className='footer'>
            <div className='footer-nav'>
              <a className='footer-link' target='_blank' href='https://github.com/juliesbock/retappd'>Github</a>
              <a className='footer-link' target='_blank' href='https://www.linkedin.com/in/julie--bock' >LinkedIn</a>
              <a className='footer-link' target='_blank' href='https://juliesbock.github.io' >Personal Site</a>
            </div>
            <div>
              <p className='footer-tag'>reTappd 2020</p>
            </div>
          </div>
          
        </div>
      </>
    )
  }
}

export default Splash;



