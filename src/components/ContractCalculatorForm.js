import React, {PropTypes} from 'react';
import Results from './Results';
import FuelSavingsTextInput from './FuelSavingsTextInput';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Toggle} from 'material-ui';

class ContractCalculatorForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.save = this.save.bind(this);
    this.calculatorKeypress = this.calculatorKeypress.bind(this);
    this.handleAdvancedToggle = this.handleAdvancedToggle.bind(this);
  }

  calculatorKeypress(name, value) {
    this.props.calculate(this.props.contractorCalculator, name, value);
  }

  handleAdvancedToggle() {
    this.props.toggleAdvanced(this.props.contractorCalculator);
  }

  save() {
    this.props.save(this.props.contractorCalculator);
  }

  render() {
    const {contractorCalculator} = this.props;

    return (
      <div>
        <h2>Take Home Pay Calculator</h2>

        <FuelSavingsTextInput floatingLabelText="Enter Day Rate" onChange={this.calculatorKeypress} name="dayRate"
                              value={contractorCalculator.dayRate}/>
        <br/>
        <FuelSavingsTextInput floatingLabelText="Working Weeks" onChange={this.calculatorKeypress} name="weeks"
                              value={contractorCalculator.weeks}/>
        <br/>
        <FuelSavingsTextInput floatingLabelText="Wages" onChange={this.calculatorKeypress} name="wages"
                              value={contractorCalculator.wages}/>
        <br/>
        <FuelSavingsTextInput floatingLabelText="Expenses" onChange={this.calculatorKeypress} name="expenses"
                              value={contractorCalculator.expenses}/>
        <br/>
        <FuelSavingsTextInput floatingLabelText="Daily Mileage" onChange={this.calculatorKeypress} name="expenses"
                               value={contractorCalculator.expenses}/>
        <br/>
        <MuiThemeProvider>
          <Toggle label="Show more detail"
                  onToggle={this.handleAdvancedToggle}
                  toggled={contractorCalculator.advanced}
          />
        </MuiThemeProvider>

        <hr/>

          {contractorCalculator.necessaryDataIsProvidedToCalculateSavings &&
          <Results advanced={contractorCalculator.advanced} results={contractorCalculator.results}/>}
          {/*<input type="submit" value="Save" onClick={this.save}/>*/}

          {/*<MuiThemeProvider>*/}
          {/*<RaisedButton type="submit" label="Save" onClick={this.save}/>*/}

          {/*</MuiThemeProvider>*/}


      </div>
  );
  }
  }

  ContractCalculatorForm.propTypes = {
    save: PropTypes.func.isRequired,
    calculate: PropTypes.func.isRequired,
    toggleAdvanced: PropTypes.func.isRequired,
    contractorCalculator: PropTypes.object.isRequired
  };

  export default ContractCalculatorForm;
