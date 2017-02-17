import React, { Component } from 'react'
import { fetchUserAction }  from './../modules/api'
import { connect }          from 'react-redux'
import { bindActionCreators } from 'redux'

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username : null
        }
    }

    handleFieldChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault()

        const { username } = this.state
        const { dispatch } = this.props

        dispatch(fetchUserAction(username))
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit.bind(this)} className="form-horizontal">
          <div className="form-group">
            <label className="col-md-2 control-label">Username</label>
            <div className="col-md-8">
                 <input
                     name="username"
                     onChange={this.handleFieldChange.bind(this)}
                     type="text"
                     placeholder="ex: arojunior"
                     className="form-control" />
            </div>
          </div>
          <div className="form-group">
              <div className="col-md-offset-2 col-md-10">
                <button
                    type="submit"
                    className="btn btn-primary">Send
                </button>
            </div>
          </div>
        </form>
      )
  }
}

export default connect((dispatch) => bindActionCreators(dispatch))(Form)
