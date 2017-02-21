import React, { Component } from 'react'
import { connect }          from 'react-redux'
import Form                 from './../components/Form'
import User                 from './../components/User'
import Repos                from './Repos'
import {
    fetchUser,
    fetchRepos,
    fetchUserSuccess,
    fetchReposSuccess
}  from './../modules/github'


class Search extends Component {

    handleSubmit(values, dispatch) {

        fetchUser(values.username)
        .then((res) => dispatch(fetchUserSuccess(res.data)))

        fetchRepos(values.username)
        .then((res) => dispatch(fetchReposSuccess(res.data)))

    }

    render() {

        const { user, repos } = this.props

        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading"><h4>Github search</h4></div>
                    <div className="panel-body">
                        <Form onSubmit={this.handleSubmit} />
                    </div>
                </div>
                { user ?
                <div className="row">
                  <div className="col-lg-3">
                    <User user={user} />
                  </div>
                  <div className="col-lg-9">
                    <Repos repos={repos} />
                  </div>
              </div>
              : null }
          </div>
        )
  }

}

function mapStateToProps(state) {
    return {
        user  : state.github.user,
        repos : state.github.repos
    }
}

export default connect(mapStateToProps)(Search)
