import { ADD_INCOME, ADD_EXPENSE, REMOVE_TRANSACTION } from '../constants/ActionTypes';

import { createAction } from 'redux-actions';
import _ from 'lodash';

export const addIncome = createAction(ADD_INCOME, value => ({
  value,
  id: _.uniqueId(),
}));

export const addExpense = createAction(ADD_EXPENSE, value => ({
  value,
  id: _.uniqueId(),
}));

export const removeTransaction = createAction(REMOVE_TRANSACTION);
