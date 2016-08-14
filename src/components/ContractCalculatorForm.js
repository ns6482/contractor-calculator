import React, {PropTypes} from 'react';
import Results from './Results';
import FuelSavingsTextInput from './FuelSavingsTextInput';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Toggle} from 'material-ui';

/**
 * Todo expenses, mileage breakdown calculation
 * disclaimer
 * more written text
 * fiverr design
 */

class ContractCalculatorForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.save = this.save.bind(this);
    this.calculatorKeypress = this.calculatorKeypress.bind(this);
    this.handleAdvancedToggle = this.handleAdvancedToggle.bind(this);
    this.handleExpenseDetailToggle = this.handleExpenseDetailToggle.bind(this);
  }

  calculatorKeypress(name, value) {
    this.props.calculate(this.props.contractorCalculator, name, value);
  }

  handleAdvancedToggle() {
    this.props.toggleAdvanced(this.props.contractorCalculator);
  }

  handleExpenseDetailToggle() {
    this.props.toggleExpenseDetail(this.props.contractorCalculator);
  }

  save() {
    this.props.save(this.props.contractorCalculator);
  }

  render() {
    const {contractorCalculator} = this.props;

    return (
      <div>
        <h2>Take Home Pay Calculator</h2>
        <FuelSavingsTextInput floatingLabelText="Day Rate" onChange={this.calculatorKeypress} name="dayRate"
                              value={contractorCalculator.dayRate}/>
        <br/>
        <FuelSavingsTextInput floatingLabelText="Working Weeks" onChange={this.calculatorKeypress} name="weeks"
                              value={contractorCalculator.weeks}/>
        <br/>
        <FuelSavingsTextInput floatingLabelText="Wages (no NI to pay on 8040)" onChange={this.calculatorKeypress}
                              name="wages"
                              value={contractorCalculator.wages}/>
        <br/>
        <MuiThemeProvider>
          <Toggle label="Expenses breakdown"
                  onToggle={this.handleExpenseDetailToggle}
                  toggled={contractorCalculator.expenseDetail}
          />
        </MuiThemeProvider>

        {contractorCalculator.expenseDetail ?

          <FuelSavingsTextInput floatingLabelText="Daily Mileage" onChange={this.calculatorKeypress}
                                name="mileage"
                                value={contractorCalculator.mileage}/>
          : null }

        <FuelSavingsTextInput floatingLabelText="Expenses" onChange={this.calculatorKeypress} name="expenses"
                              disabled= {contractorCalculator.expenseDetail} value={contractorCalculator.expenses}/>
        <br/>
        <MuiThemeProvider>
          <Toggle label="Show how dividend tax calculated"
                  onToggle={this.handleAdvancedToggle}
                  toggled={contractorCalculator.advanced}
          />
        </MuiThemeProvider>

        <hr/>

        {contractorCalculator.necessaryDataIsProvidedToCalculateSavings &&
        <Results advanced={contractorCalculator.advanced} results={contractorCalculator.results}/>}
      </div>
    );
  }
}

ContractCalculatorForm.propTypes = {
  save: PropTypes.func.isRequired,
  calculate: PropTypes.func.isRequired,
  toggleAdvanced: PropTypes.func.isRequired,
  toggleExpenseDetail: PropTypes.func.isRequired,
  contractorCalculator: PropTypes.object.isRequired
};

export default ContractCalculatorForm;
