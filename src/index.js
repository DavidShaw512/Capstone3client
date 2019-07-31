import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import store from './store';

ReactDOM.render(
    // when "store" is defined, put it in as a prop of "Provider": store={store}
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

