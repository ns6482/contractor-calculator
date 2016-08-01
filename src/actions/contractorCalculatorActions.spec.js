import { expect } from 'chai';
import * as ActionCreators from './contractorCalculatorActions';
import * as ActionTypes from '../constants/actionTypes';

describe('Actions', () => {
  const appState = {
    dayRate: 400,
    weeks: 46,
    wages: 8040,
    expenses: 5000,
    displayResults: false,
    dateModified: null,
    necessaryDataIsProvidedToCalculate: false,
    results: {
      grossEarned: 0,
      corpTax: 0,
      profitAfterTax: 0,
      personalAllowanceLeft: 0,
      basicTaxable: 0,
      tax1: 0,
      tax2: 0,
      divToTax: 0,
      takeHome:0,
      takeHomeAfterPersonalTax: 0,
      percTakeHome: 0
    }
  };

  it('should create an action to save fuel savings', () => {
    const expected = {
      type: ActionTypes.SAVE_CONFIGURATION,
      settings: appState
    };

    expect(ActionCreators.saveTakeHomePay(appState)).to.deep.equal(expected); // Notice use of deep because it's a nested object
    // expect(ActionCreators.saveTakeHomePay(appState)).to.equal(expected); // Fails. Not deeply equal
  });

  it('should create an action to calculate fuel savings', () => {
    const fieldName = 'wages';
    const value = 8060;

    const expected = {
      type: ActionTypes.CALCULATE_TAKE_HOME_PAY,
      settings: appState,
      fieldName,
      value
    };

    expect(ActionCreators.calculatorTakeHomePay(appState, fieldName, value)).to.deep.equal(expected);
  });
});
