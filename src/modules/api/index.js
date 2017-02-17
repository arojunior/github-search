import { CONTAINER_INIT }   from './services'
import { githubApi }        from './serviceCreators'

export default {
  middleware: {
    [CONTAINER_INIT]: store => next => action => {

      // Define the Service.
      const { container } = action.payload

      container.defineService(githubApi, {
        host: 'https://api.github.com'
      })

      return next(action)
    }
  }
}

// Fetch User action.
const FETCH_USER = 'redux-boot/api/user/FETCH'
const FETCH_USER_SUCCESS = 'redux-boot/api/user/FETCH_SUCCESS'
const FETCH_USER_FAILED = 'redux-boot/api/user/FETCH_FAILED'

export const fetchUserAction = username => async ({ dispatch, getService }) => {
  dispatch({ type: FETCH_USER, payload: { username } })

  try {
    // Here's the magic.
    const client = getService(githubApi)

    const { body: user } = await client.get('users/' + username)

    return {
      type: FETCH_USER_SUCCESS,
      payload: { user },
    }
  }
  catch (error) {
    dispatch({ type: FETCH_USER_FAILED, payload: { error } })
  }
}
