import './favicon.ico';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './slides/reducers';

const store = createStore(
  reducer,
  (window.devToolsExtension ?
    window.devToolsExtension() :
    (f => f)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./slides/reducers', () => {
    const nextReducer = require('./slides/reducers');
    store.replaceReducer(nextReducer);
  });
}