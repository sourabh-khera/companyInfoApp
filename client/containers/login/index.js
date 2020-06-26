import React, { Component } from 'react';
import TextField from '../../components/textField';
import Button from '../../components/button';

import classes from './style.scss';

class Login extends Component {
  render() {
    return (
      <div className={classes.loginContainer}>
        <form noValidate autoComplete="off" className={classes.loginForm}>
          <TextField
            label='Username'
            id='username'
          />
          <TextField
            label='Password'
            id='password'
          />
          <Button />
        </form>
      </div>
    )
  }
}

export default Login;
