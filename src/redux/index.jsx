import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import PropTypes from 'prop-types';

import reducer from './root-reducer';
import saga from './root-saga';

const ReduxWrapper = ({ element }) => {
  const middleware = createSagaMiddleware();
  const enhancer = composeWithDevTools(applyMiddleware(middleware));
  const store = createStore(reducer, enhancer);
  middleware.run(saga);
  return <Provider store={store}>{element}</Provider>;
};

ReduxWrapper.propTypes = {
  element: PropTypes.node.isRequired
};

export default ReduxWrapper;
