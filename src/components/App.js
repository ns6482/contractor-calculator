import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = (props) => {
  return (
    <MuiThemeProvider>

    <div>
      <IndexLink to="/">Home</IndexLink>
      {' | '}
      {/*<Link to="/contractor-calculator">Calculate Take Home Pay</Link>*/}
      {/*{' | '}*/}
      <Link to="/about">About</Link>
      <br/>
      {props.children}
    </div>
      </MuiThemeProvider>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
