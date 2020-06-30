import React from 'react'
// import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props)

    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout(){
    // debugger
    this.props.logout()
      .then(() => this.props.history.push('/'));
  }

  render() {
    return (
      <header className="session-header">
        <div className="left-header">
          <a href="/#/home">
          <img className="header-logo" src="https://untappd.akamaized.net/assets/v3/images/untappd-logo-2@2x.png" height="50" />
          </a>
          <div className="logo">
            {/* <img src="https://cdn.iconscout.com/icon/free/png-256/beer-69-129873.png" alt="Beer Icon" width="50"></img> */}
          </div>
        </div>
        <div className="right-header">
          <img className="header-user" src="https://gravatar.com/avatar/2c05a94811025ae7058a3c5ed7dc10ed?size=100&d=https%3A%2F%2Funtappd.akamaized.net%2Fsite%2Fassets%2Fimages%2Fdefault_avatar_v3_gravatar.jpg%3Fv%3D2" />
          <button className="splash-btn header-button" onClick={this.handleLogout}>Logout</button>
        </div>
      </header>
    )
  }
};

export default NavBar;

