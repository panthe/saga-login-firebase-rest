import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { History, createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSagas';
import { rootReducer, State} from './applicationState';
import { routerMiddleware } from 'connected-react-router';
import requestMiddleware from './middleware/requestMiddleware';
import { AuthState } from './auth';

const composeEnhancers = composeWithDevTools({});
const sagaMiddleware = createSagaMiddleware();
export const history: History = createBrowserHistory();

export default function configureStore(preloadState: State) {
  const store: Store = createStore(
    rootReducer(history),
    preloadState,
    composeEnhancers(
      applyMiddleware(
        requestMiddleware(),
        sagaMiddleware,
        routerMiddleware(history)
      )
    )
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
