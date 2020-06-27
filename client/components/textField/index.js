import React from 'react';
import  TextField  from '@material-ui/core/TextField';
import classes from './style.scss';

const textField = ({id, styleClass, label, variant, name, type, onChange}) => {
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
      type={type}
    />
  )
}

textField.defaultProps = {
  variant: 'outlined',
  styleClass: classes.defaultStyle,
  type: 'text'
};

export default textField;