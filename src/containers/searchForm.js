import React, { Component } from 'react'

class SearchForm extends Component {

    handleSubmit(e) {
      e.preventDefault()
    }

    render() {
        return (
            <div className="jumbotron">
              <h1>GitHub Info</h1>
              <div className="row">
                <form onSubmit={() => this.handleSubmit}>
                  <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        ref="username"
                        className="form-control"
                        placeholder="Ex: arojunior"
                      />
                  </div>
                  <button type="submit" className="btn btn-primary">Search
                  </button>
                </form>
              </div>
            </div>
        )
  }
}

export default SearchForm
