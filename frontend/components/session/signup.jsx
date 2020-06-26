import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.demoUser = this.demoUser.bind(this);
  }

  handleInput(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitSignup(this.state);
  }

  render() {
    return (
      <div className='background-wrapper'>
        <div className="signin-form">
          <div className="logo">
            <img src="https://cdn.iconscout.com/icon/free/png-256/beer-69-129873.png" alt="Beer Icon" width="50"></img>
            <h3 className="subheader">Drink Socially</h3>
          </div>
          <div className="brewery-box">
            <p>
              Are you a brewery that's trying to get added to Untappd, 
              claim and manage your brewery page, or access your brewery 
              account? Check this out first: 
              <a href="https://help.untappd.com/hc/en-us/articles/360034034712-Getting-on-Untappd-Brewery-Guide">Getting on Untappd: Brewery Guide</a> 
            </p>
          </div>
          <form>
            <label className="input-text">
              <i className="fa fa-user"> </i>
              <input type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleInput('username')} />
            </label> <br />
            <label className="input-text">
              <i className="fa fa-lock"> </i>
              <input type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleInput('password')} />
            </label>
            <p className="">You must be of legal drinking age in your country to join 
              Untappd. By clicking Create Account, you agree to our 
              <a href="https://untappd.com/terms">Terms of Use</a>
              and our <a href="https://untappd.com/privacy">Privacy Policy</a></p>
            <button className='signin-button' onClick={this.handleSubmit}>Create Account</button>
          </form>
        </div>
      </div>
    )
  }

};

export default SignupForm;



// All fields below are required unless specified.

  // Username

// Email Address

// Avoid using common words and include a mix of letters and numbers.
// Password
// Repeat Password
// First Name
// Last Name