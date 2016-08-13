import React, {PropTypes} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';


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
      <Paper zDepth={5}>
      <List>
        <ListItem>Turnover: <strong>{results.grossEarned}</strong></ListItem>
        <ListItem>Profit before tax: {results.profitBeforeTax}</ListItem>
        <ListItem>Corporation Tax 20%: {results.corpTax}</ListItem>
        <ListItem>Profit after tax: {results.profitAfterTax}</ListItem>
        {advanced ?
          <div>
            <Subheader>Dividand Tax</Subheader>
            <ListItem>Basic Rate Tax (7.5%): {results.tax1}</ListItem>
            <ListItem>Higher Rate Tax (32.5%): {results.tax2}</ListItem>
          </div>
          : null}
        <ListItem>Total Dividand Tax: {results.divToTax}</ListItem>
        <ListItem>Take Home Pay: {results.takeHome}</ListItem>
        <ListItem><strong>Take Home Pay After Tax: {results.takeHomeAfterPersonalTax}</strong></ListItem>
        <ListItem><h2>Percentage Take Home Pay: {results.percTakeHome}</h2></ListItem>
      </List>
        </Paper>
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
