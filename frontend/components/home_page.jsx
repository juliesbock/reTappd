import React from 'react'
// import { Link } from 'react-router-dom';

class HomeHeader extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
      return (
        <header className="session-header">
          <div className="left-header">
            {/* <img className="header-logo" src="https://untappd.akamaized.net/assets/v3/images/untappd-logo-2@2x.png" /> */}
            <p>The Pub</p>{/* <Link onClick={this.props.clearUpData} className="left-header-link" to="/thePub">The Pub</Link> */}
            <p>Top Rated</p>{/* <Link className="left-header-link" to="/home">Top Rated</Link> */}
            <button>Supporter</button>
            <button>Help</button>
          </div>
          <div className="right-header">
            <div className="dropdown" >
              <img className="header-user" src="https://gravatar.com/avatar/2c05a94811025ae7058a3c5ed7dc10ed?size=100&d=https%3A%2F%2Funtappd.akamaized.net%2Fsite%2Fassets%2Fimages%2Fdefault_avatar_v3_gravatar.jpg%3Fv%3D2" />
              <div className="dropdown-content">
                <div>check me out</div>
              </div>
            </div>
            <button className="header-button" id="header-logout" onClick={this.props.logout}>Log out</button>
          </div>
        </header>
      )
  }

};

export default HomeHeader;
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
    <p>© Untappd, Inc. 2020</p>
  </div>
</footer> */}