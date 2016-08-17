import React, {PropTypes} from 'react';
import Results from './Results';
import TextInput from './TextInput';
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
        <TextInput floatingLabelText="Day Rate" onChange={this.calculatorKeypress} name="dayRate"
                   value={contractorCalculator.dayRate}/>
        <br/>
        <TextInput floatingLabelText="Working Weeks" onChange={this.calculatorKeypress} name="weeks"
                   value={contractorCalculator.weeks}/>
        <br/>
        <TextInput floatingLabelText="Wages (no NI to pay on 8040)" onChange={this.calculatorKeypress}
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

          <div>
          <TextInput floatingLabelText="Daily Mileage" onChange={this.calculatorKeypress}
                     name="mileage"
                     value={contractorCalculator.mileage}/>
            <br/>
            <TextInput floatingLabelText="Accountacy Fees (monthly)" onChange={this.calculatorKeypress}
                       name="accountancyFees"
                       value={contractorCalculator.accountancyFees}/>
            <br/>
            <TextInput floatingLabelText="Insurances" onChange={this.calculatorKeypress}
                       name="insurance"
                       value={contractorCalculator.insurance}/>
            <br/>
            <TextInput floatingLabelText="Other (monthly)" onChange={this.calculatorKeypress}
                       name="other"
                       value={contractorCalculator.other}/>
            <br/>

            </div>
          : null}

        <TextInput floatingLabelText="Expenses (annual)" onChange={this.calculatorKeypress} name="expenses"
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
