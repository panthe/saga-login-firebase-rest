import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import  configureStore, { history } from './store/configureStore';
import App from './App';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);

declare const module: any;
declare function require(module_name: string): any;

if (module.hot) {
	module.hot.accept(['./App'], () => {
		const App = require('./App');
		const nextRootReducer = App.app_reducer;
		store.replaceReducer(nextRootReducer);
		const NextApp = App.App;
		ReactDOM.render(
			<Provider store={store}>
                <App />
            </Provider>,
			document.getElementById('root') as HTMLElement,
		);
    });
}

