// Code goes here

class ContractTakeHomeCalculator {

  static calculate() {
    const dayrate = 400;
    const weeks = 46;
    const days = 5;
    const wages = 8040; //8060 no NI,, todo allow second salary
    const paLimit = 11000;
    const expenses = 5000;
    const divTaxFreeAllowance = 5000;
    const taxRate = 0.20;

    const basic = 43000;
    const higher = 150000;

    const basicTaxRate = 0.075;
    const higherTaxRate = 0.325;

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
      salary: wages,
      expenses: expenses,
      corpTax: corporationTax,
      profitAfterTax: profitAfterTax,
      basic: basic,
      personalAllowanceLeft: personalAllowanceLeft,
      basicTaxable: basicTaxable,
      tax1: tax1,
      higher: higher,
      tax2: tax2,
      divToTax: divToTax,
      takeHome:takeHome,
      takeHomeAfterPersonalTax: takeHomeAfterPersonalTax,
      percTakeHome: percTakeHome
    }

  }
}

let result = ContractTakeHomeCalculator.calculate();

console.log(JSON.stringify(result));
