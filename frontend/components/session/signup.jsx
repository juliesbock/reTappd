import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors()
  }

  handleInput(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitSignup(this.state)
      .then(() => this.props.history.push('/home'));
  }

  render() {   
    const errors = this.props.errors.map((error, i) => {
      return (<div key={i}> {error} </div>)
    })

    return (
      <div className="main-background">
        <div className='sessions-frame'>
          <div className='background-wrapper'>
            <div className="signin-form">
              <div>
                <Link to="/">
                  <div className="logo">
                    <img src="https://cdn.iconscout.com/icon/free/png-256/beer-69-129873.png" alt="Beer Icon" width="50"></img>
                    <h3 className="subheader">Drink Socially</h3>
                  </div>
                </Link>
                <div className="brewery-box">
                  <p className="small-text">
                    Have an account? Want to login with a Demo Account?
                    &thinsp; <a href="#/login">Login here.</a> 
                  </p>
                </div>
                <div>
                  <ul className="session-errors">
                    {errors} &thinsp;
                  </ul>
                </div>
              </div>
              <form className="sign-up-form">
                <label className="input-text">
                  <i className="fa fa-user"> </i>
                  <input type="text"
                    placeholder=" Username"
                    value={this.state.username}
                    onChange={this.handleInput('username')} />
                </label> <br />
                <label className="input-text">
                  <i className="fa fa-lock"> </i>
                  <input type="password"
                    placeholder=" Password"
                    value={this.state.password}
                    onChange={this.handleInput('password')} />
                </label>
                <p className="small-text">You must be of legal drinking age to join 
                reTappd. By clicking Create Account, you agree to our &thinsp;
                  <a href="https://untappd.com/terms" target="_blank">Terms</a>&thinsp; and <a href="https://untappd.com/privacy" target="_blank">Policies</a>.</p>
                  <br/>
                <button className='signin-button' onClick={this.handleSubmit}>Create Account</button>
              </form>
            </div>
          </div>
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