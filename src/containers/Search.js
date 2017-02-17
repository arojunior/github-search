import React, { Component } from 'react'
import Form                 from './../components/Form'

class Search extends Component {


    handleSubmit(values, dispatch) {
        
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading"><h4>Github search</h4></div>
                <div className="panel-body">
                    <Form onSubmit={this.handleSubmit} />
                </div>
            </div>
        )
  }
}

export default Search
