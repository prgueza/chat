import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Write from './write';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
    };
  }

  handleInput = (event) => {
    const { target: { value: user } } = event;
    this.setState({ user });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { user } = this.state;
    const { login } = this.props;
    if (user !== '') login(user);
  }

  render() {
    const { user } = this.state;
    return (
      <div className="login">
        <div className="login-content h-full">
          <form className="login-form h-full flex items-center justify-center text-center" onSubmit={this.handleSubmit}>
            <input className="login-input w-2/3 bg-grey-lighter h-10 p-4 mr-2" onChange={this.handleInput} value={user} />
            <button type="submit" className="login-button">Entrar</button>
          </form>
        </div>
        <Write />
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func,
};

Login.defaultProps = {
  login: null,
};

export default Login;
