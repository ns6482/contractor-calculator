import * as types from '../constants/actionTypes';

export function saveFuelSavings(settings) {
  return {type: types.SAVE_CONFIGURATION, settings};
}

export function calculateFuelSavings(settings, fieldName, value) {
  return {type: types.CALCULATE_TAKE_HOME_PAY, settings, fieldName, value};
}
