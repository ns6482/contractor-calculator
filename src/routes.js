import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import ContractorCalculatorPage from './containers/ContractorCalculatorPage'; // eslint-disable-line import/no-named-as-default
import AboutPage from './components/AboutPage.js';
import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ContractorCalculatorPage}/>
    {/*<Route path="contractor-calculator" component={ContractorCalculatorPage}/>*/}
    <Route path="about" component={AboutPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
