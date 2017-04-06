import {handleActions} from 'redux-actions'

import {FETCH_USER_SUCCESS, FETCH_REPOS_SUCCESS} from './actions'

const initialState = {
    user        : null,
    repos       : []
}

const reducer = handleActions({
    [FETCH_USER_SUCCESS] : (state, action) => ({
        ...state,
        user: action.payload
    }),
    [FETCH_REPOS_SUCCESS] : (state, action) => ({
        ...state,
        repos: action.payload
    })
}, initialState)

export default reducer
