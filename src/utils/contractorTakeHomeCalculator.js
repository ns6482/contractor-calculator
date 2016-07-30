/**
 * Created by nehalsoni on 30/07/2016.
 */
class ContractTakeHomeCalculator {


  /**
   * wages = 8052;
   accountancy = 993.60;
   homeoffice = 4.00 * weeks;
   costs = (wages + accountancy + homeoffice );
   form.grossweekly.value = Number((dailyrate * 5)*weeks).toFixed(2);
   annualexpenses = expenses  * weeks;
   mileageexp = form.miles.value;
   disflatvat = (flatvat - 1);
   form.available.value = '';
   paallowance = 11000 - wages + 5000;
   basic = 43000;
   higher = 142052;
   basicrate = (27000 * 0.075);
   higherrate = (142052 * 0.325);
   firstmiles = ((192.31 * weeks) * 0.45);
   */


  static calculateCosts() {

  }

  static calculate(wages, dayrate) {
    const weeks = 46;
    const days = 5;
    const wages = 8040; //8060 no NI,, todo allow second salary
    const paLimit = 11000;
    const expenses = 0;
    const divTaxFreeAllowance = 5000;
    const taxRate = 0.20;

    const basic = 43000;
    const higher = 150000;

    const basicTaxRate = 0.075;
    const higherTaxRate = 0.325;

    let grossEarned = Number((dayrate * days) * weeks).toFixed(2);
    let profitBeforeTax = grossEarned  - wages - expenses
    let corporationTax = Number(profitBeforeTax * taxRate).toFixed(2);
    let profitAfterTax = profitBeforeTax - corporationTax;

    let personalAllowanceLeft = paLimit - wages;
    let taxFreeDiv = personalAllowanceLeft +  divTaxFreeAllowance;

    let basicTaxable = (basic - taxFreeDiv);
    let tax1 = basicTaxRate * basicTaxable;

    let higherTaxable =(higher - taxFreeDiv) - basicTaxable;
    let tax2 = higherTaxRate * higherTaxable;

    let totalDivTax = tax1 + tax2;

    divToTax -= wages;
    divToTax = calculateTaxRate(basic, basicTaxRate, divToTax);

    let takeHome = profitAfterTax + wages;
    let takeHomeAfterPersonalTax = takeHome - totalDivTax;

    let percTakeHome = (takeHomeAfterPersonalTax\grossEarned) * 100;

    return {
      takeHome: takeHome,
      percTakeHome: percTakeHome
    }

  }



}
