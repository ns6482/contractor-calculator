import React, {PropTypes} from 'react';
import FuelSavingsResults from './Results';
import FuelSavingsTextInput from './FuelSavingsTextInput';

class FuelSavingsForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.save = this.save.bind(this);
    this.onTimeframeChange = this.onTimeframeChange.bind(this);
    this.calculatorKeypress = this.calculatorKeypress.bind(this);
  }


  calculatorKeypress(name, value) {
    this.props.calculator(this.props.contractorCalculator, name, value);
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
          <tr>
            <td><label>Date Modified</label></td>
            <td>{contractorCalculator.dateModified}</td>
          </tr>
          </tbody>
        </table>

        <hr/>

        {contractorCalculator.necessaryDataIsProvidedToCalculateSavings && <Results results={contractorCalculator.results}/>}
        <input type="submit" value="Save" onClick={this.save}/>
      </div>
    );
  }
}

FuelSavingsForm.propTypes = {
  save: PropTypes.func.isRequired,
  calculator: PropTypes.func.isRequired,
  contractorCalculator: PropTypes.object.isRequired
};

export default FuelSavingsForm;
