import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { History, createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSagas';
import { rootReducer } from './applicationState';
import { routerMiddleware } from 'connected-react-router';

const composeEnhancers = composeWithDevTools({});
const sagaMiddleware = createSagaMiddleware();
export const history: History = createBrowserHistory();

export default function configureStore() {
  const store: Store = createStore(
      rootReducer(history),
      composeEnhancers(
          applyMiddleware(sagaMiddleware, routerMiddleware(history))
      )
  );

  sagaMiddleware.run(rootSaga);

  return store
}


