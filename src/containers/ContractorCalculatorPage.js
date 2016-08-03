import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/contractorCalculatorActions';
import ContractCalculatorForm from '../components/ContractCalculatorForm';

export const ContractCalculatorPage = (props) => {
  return (
    <ContractCalculatorForm
      calculate={props.actions.calculator}
      results={props.contractorCalculator}
    />
  );
};

FuelSavingsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  contractCalculator: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    contractorCalculator: state.contractorCalculator
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContractCalculatorPage);
