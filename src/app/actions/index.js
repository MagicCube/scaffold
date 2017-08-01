import { createAction } from 'redux-actions';

import * as api from '../api';

export default {
  hello: createAction('hello', api.hello)
};
