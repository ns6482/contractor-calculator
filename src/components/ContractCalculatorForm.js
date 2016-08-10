import React, {PropTypes} from 'react';
import Results from './Results';
import FuelSavingsTextInput from './FuelSavingsTextInput';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import {RaisedButton} from 'material-ui';

class ContractCalculatorForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.save = this.save.bind(this);
    this.calculatorKeypress = this.calculatorKeypress.bind(this);
  }

  calculatorKeypress(name, value) {
    this.props.calculate(this.props.contractorCalculator, name, value);
  }

  save() {
    this.props.save(this.props.contractorCalculator);
  }

  render() {
    const {contractorCalculator} = this.props;

    return (
      <div>
        <h2>Take Home Pay Calculator</h2>
        <table>
          <tbody>
          <tr>
            <td><label htmlFor="dayRate">Day Rate</label></td>
            <td><FuelSavingsTextInput onChange={this.calculatorKeypress} name="dayRate" value={contractorCalculator.dayRate}/>
            </td>
          </tr>
          <tr>
            <td><label htmlFor="weeks">Weeks</label></td>
            <td><FuelSavingsTextInput onChange={this.calculatorKeypress} name="weeks" value={contractorCalculator.weeks}/>
            </td>
          </tr>
          <tr>
            <td><label htmlFor="wages">Wages</label></td>
            <td><FuelSavingsTextInput onChange={this.calculatorKeypress} name="wages" value={contractorCalculator.wages}/>
            </td>
          </tr>
          <tr>
            <td><label htmlFor="tradePpg">Expenses</label></td>
            <td><FuelSavingsTextInput onChange={this.calculatorKeypress} name="expenses" value={contractorCalculator.expenses}/>
            </td>
          </tr>
          {/*<tr>*/}
            {/*<td><label>Date Modified</label></td>*/}
            {/*<td>{contractorCalculator.dateModified}</td>*/}
          {/*</tr>*/}
          </tbody>
        </table>

        <hr/>

        {contractorCalculator.necessaryDataIsProvidedToCalculateSavings && <Results results={contractorCalculator.results}/>}
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
  contractorCalculator: PropTypes.object.isRequired
};

export default ContractCalculatorForm;