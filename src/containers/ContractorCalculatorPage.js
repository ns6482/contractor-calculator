import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/contractorCalculatorActions';
import ContractCalculatorForm from '../components/ContractCalculatorForm';

export const ContractCalculatorPage = (props) => {
  return (
    <ContractCalculatorForm
      save={props.actions.saveTakeHomePay}
      calculate={props.actions.calculatorTakeHomePay}
      toggleAdvanced={props.actions.toggleAdvance}
      toggleExpenseDetail={props.actions.toggleExpenseDetail}
      contractorCalculator={props.contractorCalculator}
    />
  );
};

ContractCalculatorPage.propTypes = {
  actions: PropTypes.object.isRequired,
  contractorCalculator: PropTypes.object.isRequired
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
