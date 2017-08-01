import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import actions from '../../actions';

import styles from './index.less';

@connect(
  state => ({ ...state }),
  dispatch => ({ dispatch, actions: bindActionCreators(actions, dispatch) })
)
export default class App extends PureComponent {
  static propTypes = {
    message: PropTypes.string,
    actions: PropTypes.shape({
      hello: PropTypes.func
    }).isRequired
  }

  static defaultProps = {
    message: null
  }

  componentDidMount() {
    this.props.actions.hello('from server-side');
  }

  render() {
    const { message } = this.props;
    return (
      <div className={styles.container}>
        <h1>{message}</h1>
      </div>
    );
  }
}
