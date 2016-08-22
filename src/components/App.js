import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Social from './Social';

const App = (props) => {
  return (
    <MuiThemeProvider>
      <div>
        <IndexLink to="/">Home</IndexLink>
        {' | '}
        <Link to="/about">About</Link>
        <br/>
        <p>
          Please use the following to calculate your take home pay. We are constantly looking to improve this app. Ifyou
          have any suggestions, improvements please <a href="mailto:apps360ltd@gmail.com" target="_top">send us an
          email</a>
        </p>
        {props.children}
        <Social/>
      </div>
    </MuiThemeProvider>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
