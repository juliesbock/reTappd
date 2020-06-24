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
    this.props.processForm(this.state);
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
      <div className="login-form">
        <h1>reTappd Logo</h1>
        <h3>Login</h3>
        <form>
          <label>Username:
            <input type="text" 
              value={this.setState.username}
              onChange={this.handleInput('username')}/>
          </label>
          <label>Password:
            <input type="text"
              value={this.setState.password}
              onChange={this.handleInput('password')} />
          </label>
          <button onClick={this.handleSubmit}>Log In!</button>
        </form>
      </div>
    )
  }

};

export default LoginForm;