/*
* React
*/
import React from 'react';
import { render } from 'react-dom'

/*
* Redux
*/
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

/*
* Reducers
*/
const combineReducer = combineReducers({

})

/*
* Store
*/
const store = createStore(combineReducer, {}, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))

/*
* App
*/
import App from './App'

/*
* Render App
*/
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
