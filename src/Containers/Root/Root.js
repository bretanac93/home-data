import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../../store/configureStore'
import App from '../App/App'

const store = configureStore(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),);

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}