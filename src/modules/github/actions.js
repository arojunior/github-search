import {createAction} from 'redux-actions'

import api from './services'

const fetchUserAction = username => {
    return api.getUser(username)
           .then(res => res.data)
}

const fetchReposAction = username => {
    return api.getRepos(username)
           .then(res => res.data)
}

export const FETCH_REPOS_SUCCESS   = 'modules/github/FETCH_REPOS_SUCCESS'
export const FETCH_USER_SUCCESS    = 'modules/github/FETCH_USER_SUCCESS'

export const fetchUser  = createAction(FETCH_USER_SUCCESS, fetchUserAction)
export const fetchRepos = createAction(FETCH_REPOS_SUCCESS, fetchReposAction)
