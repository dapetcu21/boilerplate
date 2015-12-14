import React, { Component } from 'react';
import { connect } from 'react-redux';

import { removeTransaction } from '../actions/TransactionActions';
import styles from './TransactionsList.css';

@connect(state => ({
  transactions: state.transactions.items,
}))
export default class TransactionsList extends Component {
  removeTransaction(id) {
    this.props.dispatch(removeTransaction(id));
  }

  render() {
    const { transactions } = this.props;
    return <div>
      {transactions.map(({ type, value, id }) =>
        <div
          key={id}
          className={[styles.transaction, styles[type]].join(' ')}
          onClick={this.removeTransaction.bind(this, id)}
        >
          <span>{type === 'expense' ? '-' : '+'}{value}</span>
        </div>
      )}
    </div>;
  }
}
