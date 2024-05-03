import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'; // Import global styles
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store'; // Import Redux store

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);