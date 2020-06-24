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
      <div className="signin-form">
        <h1>reTappd Logo</h1>
        <h3>Create an Account!</h3>
        <form>
          <label>Username:
            <input type="text"
              value={this.setState.username}
              onChange={this.handleInput('username')} />
          </label>
          <label>Password:
            <input type="text"
              value={this.setState.password}
              onChange={this.handleInput('password')} />
          </label>
          <button onClick={this.handleSubmit}>Sign Up!</button>
        </form>
      </div>
    )
  }

};

export default SignupForm;