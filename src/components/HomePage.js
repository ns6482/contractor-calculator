import React from 'react';
import {Link} from 'react-router';

const HomePage = () => {
  return (
    <div>
      <h1>Contractor Take Home Pay Calculator</h1>

      <h2>Get Started</h2>
      <ol>
        <li>Calculate <Link to="contractor-calculator">take home pay</Link></li>
      </ol>
    </div>
  );
};

export default HomePage;
