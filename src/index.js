import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store/reducers';
import './index.css';
import Home from './Components/Home/Home';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <Home />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
