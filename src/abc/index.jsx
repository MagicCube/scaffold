import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDom from 'react-dom';

import { configStore } from './store';
import App from './components/App';

import './index.less';

const store = configStore();

function renderMountPoint() {
  ReactDom.render(
    (
      <AppContainer>
        <Provider store={store}>
          <App />
        </Provider>
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
