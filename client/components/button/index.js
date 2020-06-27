import React from 'react';
import Button from '@material-ui/core/Button';

const button = ({ variant, color, onClick}) => {
  return (
    <Button variant={variant} color={color} onClick={onClick}>
       Sign-In
    </Button>
  )
}

button.defaultProps = {
  variant: 'contained',
  color: 'primary'
}

export default button;