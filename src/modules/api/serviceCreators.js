import superagentUse    from 'superagent-use'
import superagent       from 'superagent'

export const githubApi = ({ host }) => {
  const request = superagentUse(superagent)

  request.use(req => {
    // Prefix the host in the url.
    req.url = host + '/' + req.url

    // Presets the Authorization Barer for all requests.
    req.set('Authorization')
    return req
  })

  return request
}
