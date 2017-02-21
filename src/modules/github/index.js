import api from './services'

const FETCH_REPOS_SUCCESS   = 'api/user/FETCH_REPOS_SUCCESS'
const FETCH_USER_SUCCESS    = 'api/user/FETCH_SUCCESS'

const initialState = {
    user        : null,
    repos       : []
}

const github = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_SUCCESS:
            const { user } = action.payload
            return {
                ...state,
                user : user
            }
        case FETCH_REPOS_SUCCESS:
            const { repos } = action.payload
            return {
                ...state,
                repos : repos
            }
      default:
        return state
    }
}

export const fetchUserSuccess = (user) => {
    return {
          type: FETCH_USER_SUCCESS,
          payload: {
              user  : user
          }
      }
}

export const fetchReposSuccess = (repos) => {
    return {
          type: FETCH_REPOS_SUCCESS,
          payload: {
              repos : repos
          }
      }
}

export const fetchUser = (username) => api.getUser(username)
export const fetchRepos = (username) => api.getRepos(username)

export default github
