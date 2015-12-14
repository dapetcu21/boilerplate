import React, { Component } from 'react';
import { connect } from 'react-redux';

import TransactionsList from './TransactionsList';

import { addIncome, addExpense } from '../actions/TransactionActions';

@connect(state => ({
  total: state.transactions.total,
}))
export default class App extends Component {

  state = { inputValue: '' };

  inputChanged = (evt) => {
    this.setState({ inputValue: evt.target.value });
  }

  addIncomePressed = () => {
    const value = parseFloat(this.state.inputValue, 10);
    if (isNaN(value)) { return; }
    this.props.dispatch(addIncome(value));
  }

  addExpensePressed = () => {
    const value = parseFloat(this.state.inputValue, 10);
    if (isNaN(value)) { return; }
    this.props.dispatch(addExpense(value));
  }

  render() {
    const { inputValue } = this.state;
    const { total } = this.props;
    return <div>
      <div><img src={require('../assets/logo.jpg')}/></div>
      <input value={inputValue} onChange={this.inputChanged}/>
      <button onClick={this.addIncomePressed}>Add income</button>
      <button onClick={this.addExpensePressed}>Add expense</button>
      <TransactionsList/>
      <div>Total: {total}</div>
    </div>;
  }
}
