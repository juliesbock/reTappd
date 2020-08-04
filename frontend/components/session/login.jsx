import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUser = this.demoUser.bind(this);
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
    this.props.submitLogin(this.state)
      .then(() => this.props.history.push('/home'));
  }

  demoUser(e) {
    e.preventDefault();

    const demoUser = {
      username: "DemoUser",
      password: "password"
    }

    const speed = 110;
    // set state to be "" for pw and UN

    if (this.state.username !== demoUser.username) {
      const inputUsername = setInterval(() => {
        if (this.state.username !== demoUser.username) {
          const temp = demoUser.username.slice(0, this.state.username.length + 1);
          this.setState({ username: temp });
        } else {
          clearInterval(inputUsername);
          animatePassword();
        }
      }, speed);
    }

    const animatePassword = () => {

      if (this.state.password !== demoUser.password) {
        const inputPassword = setInterval(() => {
          if (this.state.password !== demoUser.password) {
            const temp = demoUser.password.slice(0, this.state.password.length + 1);
            this.setState({ password: temp });
          } else {
            clearInterval(inputPassword);
            this.props.submitLogin(demoUser)
              .then(() => this.props.history.push('/home'));
          }
        }, speed);
      }
    }
  }

  render() {

    const errors = this.props.errors.map((error, i) => {
      return (<div key={i}> {error} </div>)
    })

    return(
      <div className="main-background">
        <div className='sessions-frame'>
          <div className="login-form">
            <Link to="/">
              <div className="logo">
                <img src="https://cdn.iconscout.com/icon/free/png-256/beer-69-129873.png" alt="Beer Icon" width="50"></img>
                <h3 className="subheader">Drink Socially</h3>
              </div>
            </Link>
            <div>
              <button className='demo-button' onClick={this.demoUser}>Demo User</button>
              <ul className="session-errors">
                {errors} &thinsp;
              </ul>
            </div>
            <form>
              <label className="input-text">
                <i className="fa fa-user"> </i> 
                <input type="text" 
                  placeholder=" Username"
                  value={this.state.username}
                  onChange={this.handleInput('username')}/>
              </label> <br/>
              <label className="input-text">
                <i className="fa fa-lock"> </i> 
                <input type="password"
                  placeholder=" Password"
                  value={this.state.password}
                  onChange={this.handleInput('password')} />
              </label><br/>
              <button className='signin-button' onClick={this.handleSubmit}>Sign In</button>
            </form>
            <div >
              <p className='new-here'>New around here? &thinsp; <a href="/#/signup">Sign up!</a></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default LoginForm;