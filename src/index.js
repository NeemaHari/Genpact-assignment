import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './store.js';
import App from './app.js';

ReactDOM.render(
  <Provider store={Store}><App /></Provider>,
  document.getElementById('app')
);