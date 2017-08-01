import { createStore } from 'redux';

import reducers from '../reducers';
import enhancer from './enhancer';

export function configStore(initialState) {
  const store = createStore(
    reducers,
    initialState,
    enhancer
  );
  return store;
}
