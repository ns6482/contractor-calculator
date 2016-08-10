import React, {PropTypes} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import  {TextField} from 'material-ui';

const FuelSavingsTextInput = (props) => {

  const handleChange = (e) => {
    props.onChange(props.name, e.target.value);
  };

  return (
    <MuiThemeProvider>
      <TextField
        className="small"
        type="text"
        placeholder={props.placeholder}
        value={props.value}
        onChange={handleChange}/>
    </MuiThemeProvider>
  );
};

FuelSavingsTextInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

export default FuelSavingsTextInput;
