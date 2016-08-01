// Code goes here

class ContractTakeHomeCalculator {

  static necessaryDataIsProvidedToCalculateSavings (settings) {
    return settings.dateRate > 0
      && settings.weeks > 0
      && settings.wages > 0
      && settings.expenses > 0;
  }

  static calculate(settings) {

    const {dayrate, weeks, wages, expenses} = settings;

    const days = 5;
    const paLimit = 11000;
    const divTaxFreeAllowance = 5000;
    const taxRate = 0.20;

    const basic = 43000;
    const higher = 150000;

    const basicTaxRate = 0.075;
    const higherTaxRate = 0.325;

    // let dayrate = 400;
    // let weeks = 46;
    // let wages = 8040; //8060 no NI,, todo allow second salary
    // let expenses = 5000;

    let grossEarned = ((dayrate * days) * weeks);
    let profitBeforeTax = grossEarned  - wages - expenses
    let corporationTax = (profitBeforeTax * taxRate);
    let profitAfterTax = profitBeforeTax - corporationTax;

    let personalAllowanceLeft = (paLimit - wages) + divTaxFreeAllowance;

    let basicTaxable = (basic - personalAllowanceLeft - wages);
    let tax1 = basicTaxRate * basicTaxable;

    let higherTaxable =(profitAfterTax - basicTaxable - personalAllowanceLeft);
    let tax2 = higherTaxRate * higherTaxable;

    let divToTax = tax1 + tax2;

    let takeHome = profitAfterTax + wages;
    let takeHomeAfterPersonalTax = takeHome - divToTax;

    let percTakeHome = (takeHomeAfterPersonalTax/grossEarned) * 100;

    return {
      grossEarned: grossEarned,
      // salary: wages,
      // expenses: expenses,
      corpTax: corporationTax,
      profitAfterTax: profitAfterTax,
      // basic: basic,
      personalAllowanceLeft: personalAllowanceLeft,
      basicTaxable: basicTaxable,
      tax1: tax1,
      // higher: higher,
      tax2: tax2,
      divToTax: divToTax,
      takeHome:takeHome,
      takeHomeAfterPersonalTax: takeHomeAfterPersonalTax,
      percTakeHome: percTakeHome
    }

  }
}
