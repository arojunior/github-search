import React, { Component } from 'react'
import Form                 from './../components/Form'

class Search extends Component {

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading"><h4>Github search</h4></div>
                <div className="panel-body">
                    <Form />
                </div>
            </div>
        )
  }
}

export default Search
