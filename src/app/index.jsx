import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDom from 'react-dom';

import App from './components/App';

import './index.less';

function renderMountPoint() {
  ReactDom.render(
    (
      <AppContainer>
        <App />
      </AppContainer>
    ),
    document.getElementById('mount-point')
  );
}

if (module.hot) {
  module.hot.accept('./components/App', () => {
    renderMountPoint();
  });
}

renderMountPoint();
