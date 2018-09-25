import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { getPosts } from './actions/postsActions';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

const store = configureStore();
store.dispatch(getPosts());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
