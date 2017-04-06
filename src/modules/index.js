import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import promiseMiddleware        from 'redux-promise'
import {reducer as formReducer} from 'redux-form'
import github                   from './github'

const combineReducer = combineReducers({
    form : formReducer,
    github
})

export const store = createStore(combineReducer, {}, compose(
    applyMiddleware(promiseMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));
