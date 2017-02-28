/*
* Redux
*/
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import promiseMiddleware          from 'redux-promise'
import { reducer as formReducer } from 'redux-form'
import github                     from './github'

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
export const store = createStore(combineReducer, {}, compose(
    applyMiddleware(promiseMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));
