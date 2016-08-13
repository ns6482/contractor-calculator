import React, {PropTypes} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import {
  BASIC_TAX_THRESHOLD,
  DIVIDEND_TAX_FREE_ALLOWANCE,
  PERSONAL_ALLOWANCE_LIMIT,
  BASIC_TAX_RATE,
  HIGHER_TAX_RATE,
  HIGHER_TAX_THRESHOLD
} from "../utils/contractorCAlculatorConstants";

// This is a stateless functional component. (Also known as pure or dumb component)
// More info: https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html#stateless-functional-components
// And https://medium.com/@joshblack/stateless-components-in-react-0-14-f9798f8b992d
// Props are being destructured below to extract the savings object to shorten calls within component.
const Results = ({advanced, results}) => {

  // You can even exclude the return statement below if the entire component is
  // composed within the parentheses. Return is necessary here because some
  // variables are set above.
  return (
    <MuiThemeProvider>
      <List>
        <ListItem><strong>Turnover: </strong><strong>{results.grossEarned}</strong></ListItem>
        <ListItem><strong>Profit before tax: </strong>{results.profitBeforeTax}<em> (i.e. turnover - wages -
          expenses)</em></ListItem>
        <ListItem><strong>Corporation Tax: </strong>{results.corpTax} (<em>20%
          of {results.profitBeforeTax}</em>)</ListItem>
        <ListItem><strong>Profit after tax: </strong>{results.profitAfterTax} (<em>Profit before tax - profit after
          tax)</em></ListItem>
        <ListItem><strong>Take Home Pay: </strong>{results.takeHome} (<em>profit after tax + wages)</em></ListItem>

        {advanced ?
          <div>
            <Subheader>Dividand Tax</Subheader>
            <em>The personal allowance (the amount of income you can receive before paying any income tax) is £11,000 in
              2016/17.
              The personal allowance remaining is {PERSONAL_ALLOWANCE_LIMIT} - wages + {DIVIDEND_TAX_FREE_ALLOWANCE}
              (dividend tax free allowance)</em>
            <ListItem><strong>Basic Rate Tax (7.5%): </strong>{results.tax1} (<em>Basic rate is the threshold
              ({BASIC_TAX_THRESHOLD} -
              personal allowance remaining - wages. The tax rate of {BASIC_TAX_RATE * 100}% is applied to this
              amount.</em>)
            </ListItem>
            <ListItem><strong>Higher Rate Tax (32.5%): </strong>{results.tax2} (<em>This remaining profit after tax -
              basic tax - personal
              allowance left. The tax rate of {HIGHER_TAX_RATE * 100}% is applied to this amount.
              (After {HIGHER_TAX_THRESHOLD} tax is applied at 38.1%</em>)</ListItem>
          </div>
          : null}
        <ListItem><strong>Total Dividend Tax: </strong>{results.divToTax}</ListItem>
        <ListItem><strong>Take Home Pay After Dividend Tax: {results.takeHomeAfterPersonalTax} ({results.percTakeHome})</strong></ListItem>
      </List>
    </MuiThemeProvider>

  );
};

// Note that this odd style is utilized for propType validation for now. Must be defined *after*
// the component is defined, which is why it's separate and down here.
Results.propTypes = {
  advanced: PropTypes.object.isBoolean,
  results: PropTypes.object.isRequired
};

export default Results;
