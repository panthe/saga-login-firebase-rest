import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './App';
import { AuthState } from './store/auth';
import Cookies from 'js-cookie';
import { UserState } from './store/user';
import {
  connectRouter,
  RouterActionType,
  RouterState
} from 'connected-react-router';
import { State } from './store/applicationState';
import { createHashHistory, Location } from 'history';

const token = Cookies.get('token');
const refreshToken = Cookies.get('refreshToken');
const expiresIn = Cookies.get('expiresIn');

const preloadStateAuth: AuthState = {
  isAuthenticated: token === undefined ? false : true,
  token: token === undefined ? null : token,
  refreshToken: refreshToken === undefined ? null : refreshToken,
  expiresIn: expiresIn === undefined ? null : expiresIn,
  errors: null
};

const preloadStateUser: UserState = {
  isLoading: false,
  isLoaded: false,
  localId: null,
  email: null,
  emailVerified: false,
  displayName: null,
  providerUserInfo: null,
  photoUrl: null,
  passwordHash: null,
  passwordUpdatedAt: 0,
  validSince: null,
  disabled: false,
  lastLoginAt: null,
  createdAt: null,
  customAuth: false,
  errors: null
};

const history = createHashHistory();

const preloadStateRouter: RouterState = {
  location: history.location,
  action: history.action
};

const preloadState: State = {
  auth: preloadStateAuth,
  user: preloadStateUser,
  router: preloadStateRouter
};

const store = configureStore(preloadState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);

declare const module: any;
// eslint-disable-next-line @typescript-eslint/camelcase
declare function require(module_name: string): any;

if (module.hot) {
  module.hot.accept(['./App'], () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const App = require('./App');
    const nextRootReducer = App.app_reducer;
    store.replaceReducer(nextRootReducer);
    const NextApp = App.App;
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root') as HTMLElement
    );
  });
}
