import { combineReducers } from 'redux';
import contractorCalculator from './contractCalculatorReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  contractorCalculator,
  routing: routerReducer
});

export default rootReducer;
