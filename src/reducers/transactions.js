import { ADD_INCOME, ADD_EXPENSE, REMOVE_TRANSACTION } from '../constants/ActionTypes';

import { List } from 'Immutable';
import { handleActions } from 'redux-actions';

/*
{ type, payload } // actions
() => { type, payload } // action creators
(state, action) => state // reducer
*/

const items = handleActions({
  [ADD_INCOME]: (state, { payload: { value, id } }) =>
    state.push({ type: 'income', value, id }),
  [ADD_EXPENSE]: (state, { payload: { value, id } }) =>
    state.push({ type: 'expense', value, id }),
  [REMOVE_TRANSACTION]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
}, new List());

export default (state = { items: new List(), total: 0 }, action) => {
  const itemsState = items(state.items, action);
  if (itemsState === state.items) { return state; }
  return {
    items: itemsState,
    total: itemsState.reduce((balance, { type, value }) =>
      balance + (type === 'income' ? value : -value), 0),
  };
};
