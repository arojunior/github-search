import api              from './services'
import { createAction } from 'redux-actions'

const FETCH_REPOS_SUCCESS   = 'modules/github/FETCH_REPOS_SUCCESS'
const FETCH_USER_SUCCESS    = 'modules/github/FETCH_USER_SUCCESS'

/*
* Reducer
*/
const initialState = {
    user        : null,
    repos       : []
}

const github = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                user: action.payload
            }
        case FETCH_REPOS_SUCCESS:
            return {
                ...state,
                repos: action.payload
            }
        default:
            return state
    }
}

/*
* Actions
*/
const fetchUserAction = username => {
    return api.getUser(username)
           .then(res => res.data)
}

const fetchReposAction = username => {
    return api.getRepos(username)
           .then(res => res.data)
}

/*
* Actions Creators
*/
export const fetchUser  = createAction(FETCH_USER_SUCCESS, fetchUserAction)
export const fetchRepos = createAction(FETCH_REPOS_SUCCESS, fetchReposAction)

export default github
