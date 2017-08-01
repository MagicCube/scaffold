import { handleActions } from 'redux-actions';

import actions from '../actions';

const initialState = {
  message: null
};

export default handleActions({
  [actions.hello](state, { payload: { message } }) {
    return {
      ...state,
      message
    };
  }
}, initialState);
