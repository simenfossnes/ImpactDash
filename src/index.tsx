import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './modern-normalize.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
