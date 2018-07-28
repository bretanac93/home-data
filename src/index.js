import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';
import Root from "./Containers/Root/Root";

ReactDOM.render(
    <Root/>
    , document.getElementById('root'));
registerServiceWorker();
