import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import TextField from '../../components/textField';
import Button from '../../components/button';
import { authenticateUser } from '../../actions/asyncActions/user_async';

import classes from './style.scss';

class Login extends Component {
  state = {
    username: '',
    password: '',
  }
  
  handleOnchange = (event) => {
    const { name, value } = event.target;
    this.setState({[name]: value})
  }
  
  handleClick = () => {
   const { validateUserCredentials } = this.props;
   validateUserCredentials(this.state);
  }

  render() {
    return (
      <div className={classes.loginContainer}>
        <form noValidate autoComplete="off" className={classes.loginForm}>
          <TextField
            label='Username'
            id='username'
            name='username'
            onChange={this.handleOnchange}
          />
          <TextField
            label='Password'
            id='password'
            name='password'
            onChange={this.handleOnchange}
          />
          <Button />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
	validateUserCredentials: bindActionCreators(authenticateUser, dispatch),
});

export default conect(null, mapDispatchToProps)(Login);
