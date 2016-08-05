import React, {PropTypes} from 'react';
import NumberFormatter from '../utils/numberFormatter';

// This is a stateless functional component. (Also known as pure or dumb component)
// More info: https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html#stateless-functional-components
// And https://medium.com/@joshblack/stateless-components-in-react-0-14-f9798f8b992d
// Props are being destructured below to extract the savings object to shorten calls within component.
const Results = ({results}) => {

  // You can even exclude the return statement below if the entire component is
  // composed within the parentheses. Return is necessary here because some
  // variables are set above.
  return (

    <table>
      <thead>
      <tr>
        <td></td>
        <td>Annual</td>
        <td>Monthly</td>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>Turnover</td>
        <td>{results.grossEarned}</td>
      </tr>
      <tr>
        <td>Profit before tax</td>
        <td>{results.profitBeforeTax}</td>
      </tr>
      <tr>
        <td>Corporation Tax 20%</td>
        <td>{results.corpTax}</td>
      </tr>
      <tr>
        <td>Profit after tax</td>
        <td>{results.profitAfterTax}</td>
      </tr>
      <tr>
        <td>Basic Rate Tax (7.5%)</td>
        <td>{results.tax1}</td>
      </tr>
      <tr>
        <td>Higher Rate Tax (32.5%)</td>
        <td>{results.tax2}</td>
      </tr>
      <tr>
        <td>Total Divedand Tax</td>
        <td>{results.divToTax}</td>
      </tr>
      <tr>
        <td>Take Home Pay</td>
        <td>{results.takeHome}</td>
      </tr>
      <tr>
        <td>Take Home Pay After Tax</td>
        <td>{results.takeHomeAfterPersonalTax}</td>
      </tr>
      <tr>
        <td>Percentage Take Home Pay</td>
        <td>{results.percTakeHome}</td>
      </tr>
      </tbody>
    </table>

  );
};

// Note that this odd style is utilized for propType validation for now. Must be defined *after*
// the component is defined, which is why it's separate and down here.
Results.propTypes = {
  results: PropTypes.object.isRequired
};

export default Results;
