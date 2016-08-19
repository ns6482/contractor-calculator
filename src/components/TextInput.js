import React, {PropTypes} from 'react';
import  {TextField} from 'material-ui';

const TextInput = (props) => {

  const handleChange = (e) => {
    props.onChange(props.name, e.target.value);
  };

  return (
      <TextField
        className="small"
        type="text"
        floatingLabelText={props.floatingLabelText}
        placeholder={props.placeholder}
        value={props.value}
        disabled={props.disabled}
        onChange={handleChange}/>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  floatingLabelText: PropTypes.string,
  disabled: PropTypes.boolean,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

export default TextInput;
