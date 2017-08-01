import * as api from '../api';
import createActions from './createActions';

export { default as createActions } from './createActions';

export default createActions('app', {
  hello(message) {
    return api.hello(message);
  }
});
