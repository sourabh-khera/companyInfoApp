import React from 'react';
import  TextField  from '@material-ui/core/TextField';
import classes from './style.scss';

const textField = ({id, styleClass, label, variant, name, onChange}) => {
  return (
    <TextField 
      id={id}
      InputProps={{
        className: styleClass
      }}
      label={label}
      variant={variant}
      name={name}
      onChange={onChange}
    />
  )
}

textField.defaultProps = {
  variant: 'outlined',
  styleClass: classes.defaultStyle,
};

export default textField;