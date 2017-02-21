import axios from 'axios'

const ApiServer = 'https://api.github.com'

const api = {
    getUser  : (username) => axios.get(`${ApiServer}/users/${username}`),
    getRepos : (username) => axios.get(`${ApiServer}/users/${username}/repos`)
}

export default api
