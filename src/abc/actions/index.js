import * as api from '../api';
import createActions from './createActions';

import meta from '../meta';

export { default as createActions } from './createActions';

export default createActions(meta.id, {
  hello(message) {
    return api.hello(message);
  }
});
