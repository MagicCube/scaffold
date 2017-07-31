import React from 'react';
import ReactDom from 'react-dom';

import App from './components/App';

import './index.less';

function renderMountPoint() {
  ReactDom.render(
    (
      <App />
    ),
    document.getElementById('mount-point')
  );
}

if (module.hot) {
  module.hot.accept('./components/App', renderMountPoint);
}

renderMountPoint();
