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
      <tbody>
      <tr>
        <td>
          <table>
            <tbody>
            <tr>
              <td>Take Home Pay</td>
              <td>Percentage Take Home Pay</td>
            </tr>
            <tr>
              <td>{results.takeHome}</td>
              <td>{results.percTakeHome}</td>
            </tr>
            </tbody>
          </table>
        </td>
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
