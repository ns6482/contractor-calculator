import * as types from '../constants/actionTypes';

export function saveTakeHomePay(settings) {
  return {type: types.SAVE_CONFIGURATION, settings};
}

export function calculatorTakeHomePay(settings, fieldName, value) {
  return {type: types.CALCULATE_TAKE_HOME_PAY, settings, fieldName, value};
}
