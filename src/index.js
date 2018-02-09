import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import PublicRoutes from './routes';
import store from './store';

import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <PublicRoutes />
  </Provider>, document.getElementById('root')
);
