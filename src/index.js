/*
* React
*/
import React      from 'react';
import { render } from 'react-dom'

/*
* Redux
*/
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { Provider }               from 'react-redux'
import promiseMiddleware          from 'redux-promise'
import { reducer as formReducer } from 'redux-form'
import github                     from './modules/github'

/*
* Reducers
*/
const combineReducer = combineReducers({
    form : formReducer,
    github
})

/*
* Store
*/
const store = createStore(combineReducer, {}, compose(
    applyMiddleware(promiseMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

/*
* App
*/
import App from './containers/App'

/*
* Render App
*/
render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
)
