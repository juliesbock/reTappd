import React from 'react';

class LoginForm extends React.Component {
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
    this.props.submitLogin(this.state)
      .then(() => this.props.history.push('/'));
  }

  // demoUser(e) {
  //   e.preventDefault();

  //   const demoUser = {
  //     username: "DemoUser",
  //     password: "password"
  //   }

  //   if (this.state.username !== demoUser.username) {
  //     const inputUsername = setInterval(() => {
  //       if (this.state.username !== demoUser.username) {
  //         const temp = demoUser.username.slice(0, this.state.username.length + 1);
  //         this.setState({ username: temp });
  //       } else {
  //         clearInterval(inputUsername);
  //         animatePassword();
  //       }
  //     }, speed);
  //   }
  // }

  render() {
    return(
      <div className='login-background'>
        <div className='login-wrapper'>
          <div className="login-form">
            <div className="logo">
              <h1>reTappd Logo</h1>
              <h3>Drink Socially</h3>
            </div>
            <form>
              <button className='demo-button'>Demo User</button>
              <label>
                <i class="fas fa-user"></i>
                <input type="text" 
                  placeholder="Username"
                  value={this.setState.username}
                  onChange={this.handleInput('username')}/>
              </label>
              <label>
                <i class="fas fa-user"></i>
                <input type="text"
                  placeholder="Password"
                  value={this.setState.password}
                  onChange={this.handleInput('password')} />
              </label>
              <button className='signin-button' onClick={this.handleSubmit}>Sign In</button>
              <p>New around here? <a href="/login">Sign up!</a></p>
            </form>
          </div>
        </div>
      </div>
    )
  }
};

export default LoginForm;