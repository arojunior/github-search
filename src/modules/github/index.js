import api from './services'
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
                user : action.payload
            }
        case FETCH_REPOS_SUCCESS:
            return {
                ...state,
                repos : action.payload
            }
      default:
        return state
    }
}

/*
* Actions
*/
const fetchUserSuccess = createAction(FETCH_USER_SUCCESS)
const fetchReposSuccess = createAction(FETCH_REPOS_SUCCESS)

export const fetchUser = (username) => {
    return api.getUser(username)
           .then((res) => fetchUserSuccess(res.data))
}

export const fetchRepos = (username) => {
    return api.getRepos(username)
           .then((res) => fetchReposSuccess(res.data))
}

export default github
