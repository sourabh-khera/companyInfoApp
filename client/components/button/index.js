import React from 'react';
import Button from '@material-ui/core/Button';

const button = ({ variant, color }) => {
  return (
    <Button variant={variant} color={color}>
       Sign-In
    </Button>
  )
}

button.defaultProps = {
  variant: 'contained',
  color: 'primary'
}

export default button;