import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { rootSagasAuth } from './rootSagas';
import { rootReducer } from './applicationState';

const composeEnhancers = composeWithDevTools({});
const sagaMiddleware = createSagaMiddleware();
const PUBLIC_SITE_URL = 'PUBLIC_SITE_URL Auth';
const BASE_URL = 'BASE_URL Auth';

export const store = createStore(
  rootReducer(),
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(rootSagasAuth, {PUBLIC_SITE_URL, BASE_URL});