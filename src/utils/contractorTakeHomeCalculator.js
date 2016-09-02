import NumberFormatter from './numberFormatter';
import * as consts from './contractorCalculatorConstants';

export default class ContractTakeHomeCalculator {

  static necessaryDataIsProvidedToCalculateSavings(settings) {
    return settings.dayRate > 0
      && settings.weeks > 0
      && settings.wages > 0
      && settings.expenses >= 0;
  }

  static calculateExpenses(settings) {

    if (!settings.expenseDetail)
      return settings.expenses;

    let mileage = 0;
    if (settings.mileage > 0)
      mileage = ((settings.mileage * 0.45) * 5) * settings.weeks;

    let months = 0;
    if (settings.weeks > 4)
      months = (settings.weeks / 4);

    let accountancy = 0;
    if (settings.accountancyFees > 0)
      accountancy = settings.accountancyFees * months;

    let insurance = 0;

    if (settings.insurance > 0)
      insurance = settings.insurance * months;

    let other = 0;
    if (settings.other > 0)
      other = settings.other * months;

    return parseFloat(mileage) + parseFloat(insurance) + parseFloat(accountancy) + parseFloat(other);

  }

  static calculate(settings) {

    const {dayRate, weeks, wages, expenses} = settings;

    const days = 5;
    // const paLimit = 11000;
    // const divTaxFreeAllowance = 5000;
    // const taxRate = 0.20;
    //
    // const basic = 43000;
    // const higher = 150000;
    //
    // const basicTaxRate = 0.075;
    // const higherTaxRate = 0.325;

    // let dayrate = 400;
    // let weeks = 46;
    // let wages = 8040; //8060 no NI,, todo allow second salary
    // let expenses = 5000;

    let grossEarned = ((dayRate * days) * weeks);
    let profitBeforeTax = grossEarned - wages - expenses;//grossEarned  - (wages + expenses);
    let corporationTax = (profitBeforeTax * consts.CORPORATION_TAX);
    let profitAfterTax = profitBeforeTax - corporationTax;

    let personalAllowanceLeft = (consts.PERSONAL_ALLOWANCE_LIMIT - wages) + consts.DIVIDEND_TAX_FREE_ALLOWANCE;

    let basicTaxable = (consts.BASIC_TAX_THRESHOLD - personalAllowanceLeft - wages);
    let tax1 = consts.BASIC_TAX_RATE * basicTaxable;

    let higherTaxable = (profitAfterTax - basicTaxable - personalAllowanceLeft);
    let tax2 = higherTaxable <0 ? 0 : consts.HIGHER_TAX_RATE * higherTaxable;

    let divToTax = tax1 + tax2;

    let takeHome = parseFloat(profitAfterTax) + parseFloat(wages);
    let takeHomeAfterPersonalTax = parseFloat(takeHome) - parseFloat(divToTax);

    let percTakeHome = (takeHomeAfterPersonalTax / grossEarned) * 100;

    return {
      grossEarned: NumberFormatter.getCurrencyFormattedNumber(grossEarned),
      // salary: wages,
      // expenses: expenses,

      profitBeforeTax: NumberFormatter.getCurrencyFormattedNumber(profitBeforeTax),
      corpTax: NumberFormatter.getCurrencyFormattedNumber(corporationTax),
      profitAfterTax: NumberFormatter.getCurrencyFormattedNumber(profitAfterTax),

      // basic: basic,
      personalAllowanceLeft: NumberFormatter.getCurrencyFormattedNumber(personalAllowanceLeft),
      basicTaxable: NumberFormatter.getCurrencyFormattedNumber(basicTaxable),
      tax1: NumberFormatter.getCurrencyFormattedNumber(tax1),

      // higher: higher,
      tax2: NumberFormatter.getCurrencyFormattedNumber(tax2),
      divToTax: NumberFormatter.getCurrencyFormattedNumber(divToTax),
      takeHome: NumberFormatter.getCurrencyFormattedNumber(takeHome),
      takeHomeAfterPersonalTax: NumberFormatter.getCurrencyFormattedNumber(takeHomeAfterPersonalTax),
      percTakeHome: `${percTakeHome.toFixed(0)}%`
    };
  }
}
