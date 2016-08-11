import {SAVE_CONFIGURATION, CALCULATE_TAKE_HOME_PAY, TOGGLE_ADVANCED} from '../constants/actionTypes';
import calculator from '../utils/contractorTakeHomeCalculator';
import dateHelper from '../utils/dateHelper';
// import objectAssign from 'object-assign';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function contractCalculatorReducer(state = initialState.contractorCalculator, action) {
  let newState;

  switch (action.type) {
    case SAVE_CONFIGURATION:
      // For this example, just simulating a save by changing date modified.
      // In a real app using Redux, you might use redux-thunk and handle the async call in contractorCalculatorActions.js
      return Object.assign({}, state, {dateModified: dateHelper.getFormattedDateTime(new Date())});

    case TOGGLE_ADVANCED:
      newState = Object.assign({}, state);
      newState.advanced = !newState.advanced;
      return newState;

    case CALCULATE_TAKE_HOME_PAY:
      newState = Object.assign({}, state);
      newState[action.fieldName] = action.value;
      newState.necessaryDataIsProvidedToCalculateSavings = calculator.necessaryDataIsProvidedToCalculateSavings(newState);
      newState.dateModified = dateHelper.getFormattedDateTime(new Date());

      if (newState.necessaryDataIsProvidedToCalculateSavings) {
        newState.results = calculator.calculate(newState);
      }

      return newState;


    default:
      return state;
  }
}
