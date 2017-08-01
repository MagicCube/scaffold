import { createAction } from 'redux-actions';

export default function (prefix, actions) {
  return Object.keys(actions).reduce((results, key) => {
    results[key] = createAction(`${prefix}_${key}`, actions[key]);
    return results;
  }, {});
}
