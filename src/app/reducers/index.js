import { handleActions } from 'redux-actions';

import actions from '../actions';

const initialState = {
  message: null
};

export default handleActions({
  [actions.hello](state, { error, payload }) {
    if (!error) {
      return {
        ...state,
        message: payload.message
      };
    } else {
      console.error(payload);
      return state;
    }
  }
}, initialState);
